import { Component, signal } from '@angular/core';
import { UserProfileComponent } from './components/user-profile/user-profile';

@Component({
  selector: 'app-root',
  imports: [
  HeaderComponent,
  SidebarComponent,
  MainContentComponent,
  FooterComponent,
  UserProfileComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pr-02');
}
