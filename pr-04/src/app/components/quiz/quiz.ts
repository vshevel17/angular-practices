import { Component, ViewChild } from '@angular/core';
import { QuestionComponent } from '../question/question';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class QuizComponent {

  questionData = {
    text: 'Яка мова використовується в Angular?',
    options: ['Java', 'TypeScript', 'Python', 'C++'],
    correctIndex: 1
  };

  selectedAnswer: string | null = null;

  @ViewChild(QuestionComponent)
  questionComponent!: QuestionComponent;

  onAnswerSelected(answer: string) {
    this.selectedAnswer = answer;
  }

  showCorrectAnswer() {
    this.questionComponent.showAnswer();
  }
}
