from .views import QuestionListView
from django.urls import path


urlpatterns = [
    path(r'questions', QuestionListView.as_view(), name='question-list'),
]