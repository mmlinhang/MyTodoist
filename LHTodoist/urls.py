from django.conf.urls import include, url
from django.contrib import admin

from django.conf.urls import url, include
from django.contrib import admin

from rest_framework.urlpatterns import format_suffix_patterns

from todoist.views import *


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r"^register", UserRegisterAPIView.as_view()),
    url(r"^login", UserLoginAPIView.as_view()),
    url(r"^tasks$", TaskCreate.as_view()),
    url(r"^tasks/(?P<pk>[0-9]+)$", TaskDetail.as_view()),
    url(r"^listTask/(?P<type>(today)|(all))$", TaskListAPIView.as_view())
]


urlpatterns = format_suffix_patterns(urlpatterns)
