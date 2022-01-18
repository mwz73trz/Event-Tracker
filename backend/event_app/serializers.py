from rest_framework import serializers
from event_app.models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'title', 'scheduled_date', 'scheduled_time', 'description']