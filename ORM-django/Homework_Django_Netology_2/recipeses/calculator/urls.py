# calculator/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('<str:recipe_name>/', views.recipe_view, name='recipe'),
]
