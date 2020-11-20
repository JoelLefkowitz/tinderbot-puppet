from .views import MatchViewSet
from django.urls import path

urlpatterns = [
    path("", MatchViewSet.as_view({"get": "list", "post": "create"})),
]
