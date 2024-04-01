from rest_framework import generics
from rest_framework import mixins
from .serializers import QuestionSerializer
from .models import Question


class QuestionListView(generics.ListAPIView):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
