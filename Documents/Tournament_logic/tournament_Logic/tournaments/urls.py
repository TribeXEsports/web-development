from django.urls import path
from .views import register_team

urlpatterns = [
    path('tournaments/<str:tournament_id>/register/', register_team, name='register_team'),
]
