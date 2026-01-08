import { Component } from '@angular/core';
import { QuizComponent } from './components/quiz/quiz';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuizComponent],
  template: `<app-quiz></app-quiz>`
})
export class App {}
