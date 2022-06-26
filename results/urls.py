from django import views
from django.urls import path
from . import views

app_name = 'results'

urlpatterns = [
    path('', views.Results, name='results'),
]