from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import generics # type: ignore
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny # type: ignore



class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_class = [AllowAny]
