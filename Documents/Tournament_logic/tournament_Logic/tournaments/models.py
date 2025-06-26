from django.db import models

from mongoengine import Document, StringField, ReferenceField, ListField, DateTimeField, IntField, BooleanField, \
    EmbeddedDocument, EmbeddedDocumentField
import datetime

#For Admin Only, Use an API request for tournament creation, after successful login and authorization

class Players(EmbeddedDocument):
    name = StringField(required=True)    #In game name or Real Name
    game_uid = IntField(required=True)

class Tournament(Document):
    name = StringField(required=True)
    game = StringField(required=True, choices=['Free Fire', 'BGMI', 'Valorant', 'CODM', 'Other'])
    team_size = IntField(required=True)
    max_teams = IntField(required=True)
    start_time = DateTimeField(required=True)
    format = StringField(choices = ['Single Elimination', 'Double Elimination', 'Round Robin'], required=True)
    # Paid entry fields
    entry_fee = IntField(required=True)  # in smallest currency unit (e.g. paise)
    currency = StringField(default='INR')
    prize_pool = IntField(required=True)
    prize_distribution = ListField()  # e.g., [{"position": 1, "percent": 70}, ...]
    status = StringField(choices=['upcoming', 'ongoing', 'completed', 'cancelled'], default='upcoming')

class Team(Document):
    team_name = StringField(required=True)
    players = ListField(EmbeddedDocumentField(Players))
    tournament = ReferenceField(Tournament, required=True)
    time_created = DateTimeField(default=datetime.datetime.utcnow)
    current_status = StringField(required=True)
    # Payment fields
    payment_status = StringField(choices=['pending', 'paid', 'failed'], default='pending')
    payment_reference = StringField()  # transaction ID or similar

class Match(Document):
    tournament = ReferenceField(Tournament)
    team1 = ReferenceField(Team)
    team2 = ReferenceField(Team)
    round_number = IntField()
    bracket = StringField(default="upper")  
    result = StringField(default="pending") 