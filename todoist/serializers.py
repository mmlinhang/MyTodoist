# _*_coding:utf-8_*_

from rest_framework import serializers
from todoist.models import Task, User

class TaskSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source="user.userName")

    class Meta:
        model = Task
        fields = (
            "id",
            "content",
            "expireDate",
            "priority",
            "user"
        )

#用于用户注册后返回数据
class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "userName",
            "password"
        )

class UserSerializer(serializers.ModelSerializer):
    taskList = serializers.PrimaryKeyRelatedField(many=True, queryset=Task.objects.all())

    class Meta:
        model = User
        fields = (
            "userName",
            "taskList"
        )
