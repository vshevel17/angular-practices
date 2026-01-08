import { Component } from '@angular/core';
import { ProductTableComponent } from './components/product-table/product-table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductTableComponent],
  template: `<app-product-table></app-product-table>`
})
export class App {}
