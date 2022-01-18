from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=100)
    scheduled_date = models.DateField()
    scheduled_time = models.TimeField()
    description = models.TextField(max_length=500)
    
    def __str__(self):
        return f"{self.title}"
