import json

from django.http import JsonResponse
from django.shortcuts import render
from mongoengine import Document, StringField, ReferenceField, ListField, DateTimeField, IntField, BooleanField
import datetime
from tournaments.models import Tournament, Players, Team, Match
import random
from .fixture_model import single_elim, round_robin, double_elim

#Required data from frontend: Team name, players name, In Game UID

# Create views here.
def register_team(request, tournament_id):
    tournament = Tournament.objects.get(id = tournament_id)

    if request.method != 'POST':
        return JsonResponse({'error': 'Only Post Method allowed'}, status=405)
    try:
        data = json.loads(request.body)
    except:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)

    team_name = data.get('Team Name')
    players_data = data.get('Players')

    if not team_name or not players_data:
        return JsonResponse({'error': 'Team name and players required'}, status=400)

    if len(players_data) != tournament.team_size:
        return JsonResponse({'error': f'Team must have exactly {tournament.team_size} players'}, status=400)

    if Team.objects(tournament=tournament).count() >= tournament.max_teams:
        return JsonResponse({'error': 'Max teams reached for this tournament'}, status=400)

    players = []
    for p in players_data:
        if 'name' not in p or 'uid' not in p:
            return JsonResponse({'error': 'Each player must have name and uid'}, status=400)
        players.append(Players(name=p['name'], game_uid=p['uid']))

    # Payment integration (placeholder for later)
    # When in deployment stage, we will integrate with payment gateway and verify payment before confirming registration
    payment_status = 'paid'  # Simulate payment as always successful for now
    payment_reference = 'SIMULATED_PAYMENT_REF'  # Replace with real payment reference from gateway

    if payment_status != 'paid':
        return JsonResponse({'error': 'Payment required to register team'}, status=402)

    team = Team(
        team_name=team_name,
        players=players,
        tournament=tournament,
        current_status='registered',
        payment_status=payment_status,
        payment_reference=payment_reference
    )
    team.save()
    return JsonResponse({'message': 'Team registered successfully', 'payment_status': payment_status})

def generate_fixtures(request, tournament_id):
    tournament = Tournament.objects.get(id=tournament_id)

    # Note: Tournament format string may change depending on MongoDB structure
    format_map = {
        'Single Elimination': single_elim,
        'Round Robin': round_robin,
        'Double Elimination': double_elim
    }
    fixture_func = format_map.get(tournament.format)
    if not fixture_func:
        return JsonResponse({"error": "Invalid format"}, status=400)

    matches = fixture_func(tournament)
    return JsonResponse({
        "message": "Fixtures created",
        "match_count": len(matches)
    })



