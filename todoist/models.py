# _*_coding:utf-8_*_
from django.db import models
from datetime import date
# Create your models here.

class User(models.Model):
    '''
    用户
    '''

    userName = models.CharField(max_length=25)
    password = models.CharField(max_length=25)

    def __unicode__(self):
        return self.userName



class Task(models.Model):
    '''
    待办事项
    '''

    priorityLevel = (
        (1, u"低"),
        (2, u"中"),
        (3, u"高")
    )

    content = models.CharField(max_length=255, verbose_name="内容")
    expireDate = models.DateField(verbose_name="任务期限", default=date.strftime(date.today(), "%Y-%m-%d"))
    priority = models.IntegerField(choices=priorityLevel, default=1, verbose_name="优先级")
    user = models.ForeignKey(User, related_name="taskList")

    def __unicode__(self):
        return self.content

    class Meta:
        verbose_name = "待办事项"