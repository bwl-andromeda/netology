from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from advertisements.models import Advertisement
from advertisements.permissions import IsAdvertCreatorOrReadOnly
from advertisements.serializers import AdvertisementSerializer
from advertisements.filters import AdvertisementFilter
from rest_framework.throttling import AnonRateThrottle, UserRateThrottle


class AdvertisementViewSet(viewsets.ModelViewSet):
    throttle_classes = [AnonRateThrottle, UserRateThrottle]
    serializer_class = AdvertisementSerializer
    queryset = Advertisement.objects.all()
    filterset_class = AdvertisementFilter

    def get_permissions(self):
        if self.action in ['update', 'partial_update', 'destroy']:
            permission_classes = [IsAdvertCreatorOrReadOnly]
        else:
            permission_classes = [permissions.AllowAny]
        return [permission() for permission in permission_classes]

    def destroy(self, request, *args, **kwargs):
        advertisement = self.get_object()
        if advertisement.creator != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        advertisement.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
