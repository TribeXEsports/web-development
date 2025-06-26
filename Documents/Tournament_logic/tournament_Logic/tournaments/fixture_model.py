from tournaments.models import Tournament, Players, Team, Match
import random


def single_elim(tournament):
    teams = list(Team.objects(tournament_id=tournament.id))
    random.shuffle(teams)
    fixtures = []

    for i in range(0, len(teams), 2):
        match = Match(
            tournament=tournament,
            team1=teams[i],
            team2=teams[i + 1] if i + 1 < len(teams) else None,
            round_number=1
        ).save()
        fixtures.append(match)

    return fixtures

from itertools import combinations

def round_robin(tournament):
    teams = list(Team.objects(tournament_id=tournament.id))
    fixtures = []

    for team1, team2 in combinations(teams, 2):
        match = Match(
            tournament=tournament,
            team1=team1,
            team2=team2,
            round_number=1
        ).save()
        fixtures.append(match)

    return fixtures

def double_elim(tournament):
    teams = list(Team.objects(tournament_id=tournament.id))
    random.shuffle(teams)
    fixtures = []

    for i in range(0, len(teams), 2):
        match = Match(
            tournament=tournament,
            team1=teams[i],
            team2=teams[i + 1] if i + 1 < len(teams) else None,
            round_number=1,
            bracket="upper"
        ).save()
        fixtures.append(match)

    return fixtures
