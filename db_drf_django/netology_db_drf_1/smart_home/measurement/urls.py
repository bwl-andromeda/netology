from django.urls import path,include
from rest_framework import routers
from measurement.views import SensorViewSet,MeasurementViewSet

router = routers.DefaultRouter()
router.register('sensors',SensorViewSet)
router.register('measurements',MeasurementViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
