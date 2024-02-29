from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin

from .models import Advertisement


class AdvertisementAdmin(admin.ModelAdmin):
    list_display = ['title', 'status', 'creator', 'created_at']
    list_filter = ['status', 'creator']

    actions = ['make_closed']

    def make_closed(self, request, queryset):
        queryset.update(status='CLOSED')


admin.site.register(Advertisement, AdvertisementAdmin)

admin.site.unregister(User)
admin.site.register(User, UserAdmin)
