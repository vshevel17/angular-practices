import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { SidebarComponent } from './components/sidebar/sidebar';
import { MainContentComponent } from './components/main-content/main-content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, MainContentComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App { }
