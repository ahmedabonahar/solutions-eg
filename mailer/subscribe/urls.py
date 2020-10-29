from django.urls import path
from .views import *

urlpatterns = [
  path('', SubscribeAPI.as_view()),
]
