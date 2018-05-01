# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('content', models.CharField(max_length=255, verbose_name=b'\xe5\x86\x85\xe5\xae\xb9')),
                ('expireDate', models.DateField(default=b'2018-04-29', verbose_name=b'\xe4\xbb\xbb\xe5\x8a\xa1\xe6\x9c\x9f\xe9\x99\x90')),
                ('priority', models.IntegerField(default=1, verbose_name=b'\xe4\xbc\x98\xe5\x85\x88\xe7\xba\xa7', choices=[(1, '\u4f4e'), (2, '\u4e2d'), (3, '\u9ad8')])),
            ],
            options={
                'verbose_name': '\u5f85\u529e\u4e8b\u9879',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('userName', models.CharField(max_length=25)),
                ('password', models.CharField(max_length=25)),
            ],
        ),
        migrations.AddField(
            model_name='task',
            name='user',
            field=models.ForeignKey(to='todoist.User'),
        ),
    ]
