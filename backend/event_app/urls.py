from django.urls import path, include
from event_app.views import EventViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('events', EventViewSet, basename='event')
urlpatterns = router.urls