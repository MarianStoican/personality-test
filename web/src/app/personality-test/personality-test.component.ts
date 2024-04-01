import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';


interface Answer {
  id: number;
  content: string;
  points: number;
}

interface Question {
  id: number;
  content: string;
  answers: Answer[];
}


@Component({
  selector: 'app-personality-test',
  standalone: true,
  imports: [CardModule, CommonModule, DialogModule],
  templateUrl: './personality-test.component.html',
  styleUrl: './personality-test.component.css'
})
export class PersonalityTestComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  result: any = {};
  showResultDialog: boolean = false;
  testResult: string = '';
  iconPath: string = '';

  async ngOnInit() {
    await this.fetchQuestionData()
  }

  async fetchQuestionData() {
    try {
      const response = await this.apiService.getQuestions().toPromise();
      this.questions = response;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  selectAnswer(answer: any) {
    this.result[this.currentQuestionIndex] = answer.points;
  }

  submitResult() {
    const result = this.calculatePersonalityType();
    this.showResultDialog = true;
    this.testResult = `You are ${result}.`
  }

  calculatePersonalityType() {
    let totalPoints = 0;
    for (let item in this.result) {
      totalPoints += this.result[item];
    }
    let result = '';
    if (totalPoints >= 0) {
      result = 'Extrovert';
      this.iconPath = '../../assets/extrovert.svg'
    } else {
      result = 'Introvert';
      this.iconPath = '../../assets/introvert.svg'
    }
    return result;
  }

  onDialogClose() {
    this.router.navigateByUrl('/');
  }

  getChar(index: number) {
    const chars = ["A", "B", "C", "D"];
    return chars[index] || "";
  }
}
