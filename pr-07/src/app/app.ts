import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, switchMap } from 'rxjs';
import { ApiService } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html'
})
export class App {

  users$ = this.apiService.getUsers();

  selectedUserId$ = new BehaviorSubject<number>(1);

  posts$ = this.selectedUserId$.pipe(
    switchMap(userId => this.apiService.getPostsByUserId(userId))
  );

  constructor(private apiService: ApiService) {}

  selectUser(id: number) {
    this.selectedUserId$.next(id);
  }
}
