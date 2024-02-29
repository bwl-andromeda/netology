from django_filters import DateFromToRangeFilter, FilterSet
from advertisements.models import Advertisement


class AdvertisementFilter(FilterSet):
    created_at = DateFromToRangeFilter()

    class Meta:
        model = Advertisement
        fields = ['status', 'created_at']