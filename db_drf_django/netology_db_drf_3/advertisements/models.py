from django.core.exceptions import ValidationError
from django.db import models
from django.contrib.auth.models import User


class Advertisement(models.Model):
    OPEN = 'OPEN'
    CLOSED = 'CLOSED'
    STATUS_CHOICES = [
        (OPEN, 'Open'),
        (CLOSED, 'Closed'),
    ]

    title = models.CharField(max_length=100)
    description = models.TextField()
    status = models.CharField(max_length=6, choices=STATUS_CHOICES, default=OPEN)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    def clean(self):
        opened_adverts_count = Advertisement.objects.filter(creator=self.creator, status='OPEN').count()
        if self.status == 'OPEN' and opened_adverts_count >= 10:
            raise ValidationError('У пользователя не может быть более 10 открытых объявлений')
