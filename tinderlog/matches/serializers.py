from rest_framework.serializers import ModelSerializer, CharField

from .models import Match


class MatchSerializer(ModelSerializer):
    firstName = CharField(source="first_name")
    lastName = CharField(source="last_name")

    class Meta:
        model = Match
        fields = ["id", "created", "firstName", "lastName"]
