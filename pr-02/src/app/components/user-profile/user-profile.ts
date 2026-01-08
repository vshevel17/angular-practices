import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.interface';
import { UserStatus } from '../../models/user-status.enum';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfileComponent {

  user: User = {
    id: 1,
    name: 'Іван Петренко',
    status: UserStatus.Active,
    address: {
      city: 'Суми',
      street: 'вул. Харківська, 15'
    },
    hobbies: ['Програмування', 'Читання', 'Подорожі']
  };

  getHobbiesCount(): number {
    return this.user.hobbies.length;
  }
}
