from rest_framework import viewsets
from event_app.serializers import EventSerializer
from event_app.models import Event

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('scheduled_date')
    serializer_class = EventSerializer
