# _*_coding:utf-8_*_
from todoist.models import Task, User
from todoist.serializers import TaskSerializer, UserRegisterSerializer, UserSerializer

from datetime import date

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.status import HTTP_400_BAD_REQUEST,HTTP_204_NO_CONTENT
from rest_framework.permissions import AllowAny
from rest_framework import mixins
from rest_framework import generics

from django.http import Http404
# Create your views here.

class UserLoginAPIView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        data = request.data
        userName = data.get("userName")
        password = data.get("password")
        user = User.objects.get(userName__exact=userName)
        if user.password == password:
            request.session["userId"] = user.id
            serializer = UserSerializer(user)
            returnData = serializer.data
            return Response(returnData, status=HTTP_200_OK)
        return Response("userName or password error", HTTP_400_BAD_REQUEST)


class UserRegisterAPIView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        data = request.data
        userName = data.get("userName")
        if User.objects.filter(userName__exact=userName):
            return Response("用户名已经存在，请更换", HTTP_400_BAD_REQUEST)
        serializer = UserRegisterSerializer(data=data)
        if(serializer.is_valid()):
            serializer.save()
            return Response("登录成功", status=HTTP_200_OK)
        return Response("用户名、密码有误，请更换", status=HTTP_400_BAD_REQUEST)


class TaskCreate(mixins.CreateModelMixin,
                  generics.GenericAPIView):
    permission_classes = (AllowAny,)
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def perform_create(self, serializer):
        serializer.save(user=User.objects.get(id=1))

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class TaskDetail(APIView):
    permission_classes = (AllowAny,)

    def get_object(self, pk):
        try:
            return Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        task = self.get_object(pk)
        serializer = TaskSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        task = self.get_object(pk)
        task.delete()
        return Response(status=HTTP_204_NO_CONTENT)


class TaskListAPIView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, type, format=None):
        if(type == "today"):
            tasks = Task.objects.filter(user_id=1, expireDate=date.today())
            serializer = TaskSerializer(tasks, many=True)
            return Response(data=serializer.data, status=HTTP_200_OK)
        if(type == "all"):
            tasks = Task.objects.filter(user_id=1)
            serializer = TaskSerializer(tasks, many=True)
            return Response(data=serializer.data, status=HTTP_200_OK)
