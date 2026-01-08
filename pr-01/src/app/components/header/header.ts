import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  projectTitle = 'Макет сайту (PR-01)';
  subtitle = 'Angular • компоненти • Git';
}
