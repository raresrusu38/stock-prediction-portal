from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import generics # type: ignore
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny # type: ignore
from rest_framework.views import APIView # type: ignore
from rest_framework.permissions import IsAuthenticated # type: ignore
from rest_framework.response import Response



class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_class = [AllowAny]



class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        response = {
            'status' : 'Request was permitted'
        }
        return Response(response)
