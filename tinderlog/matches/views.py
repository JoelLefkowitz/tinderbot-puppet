from rest_framework.viewsets import ModelViewSet

from .models import Match
from .serializers import MatchSerializer


class MatchViewSet(ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer
    
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

