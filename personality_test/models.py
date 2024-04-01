from django.db.models import Model, ForeignKey, CASCADE
from django.db.models.fields import CharField, IntegerField
from django.db.models.fields.related import ManyToManyField

class Question(Model):
    content = CharField(max_length=200)
    answers = ManyToManyField('Answer')
    
    
class Answer(Model):
    content = CharField()
    points = IntegerField()
