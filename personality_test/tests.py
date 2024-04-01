from django.test import TestCase
from django.core.management import call_command
from personality_test.models import Question, Answer
from django.test import Client

class MyModelTestCase(TestCase):
    def setUp(self):
        call_command('loaddata', 'questions_data.json', verbosity=0)

    def test_models_count(self):
        self.assertEqual(Question.objects.count(), 5)
        self.assertEqual(Answer.objects.count(), 20)
        
    def test_question_api(self):
        client = Client()
        response = client.get('/questions', content_type='application/json')
        self.assertEqual(200, response.status_code)
