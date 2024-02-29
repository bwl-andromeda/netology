from django.urls import path, include
from rest_framework.routers import DefaultRouter
from advertisements import views


router = DefaultRouter()
router.register('advertisements', views.AdvertisementViewSet)

urlpatterns = [
    path('', include(router.urls))
]