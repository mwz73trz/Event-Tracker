# Generated by Django 4.0.1 on 2022-01-18 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('scheduled_date', models.DateField()),
                ('scheduled_time', models.TimeField()),
                ('description', models.TextField(max_length=500)),
            ],
        ),
    ]