import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-table.html',
  styleUrl: './product-table.css'
})
export class ProductTableComponent {

  products = [
    { name: 'Мишка', category: 'Аксесуари', price: 30, stockCount: 12 },
    { name: 'Клавіатура', category: 'Аксесуари', price: 80, stockCount: 0 },
    { name: 'Монітор', category: 'Техніка', price: 250, stockCount: 5 },
    { name: 'Флешка', category: 'Накопичувачі', price: 45, stockCount: 0 },
    { name: 'Навушники', category: 'Аудіо', price: 120, stockCount: 8 }
  ];

  getPriceStatus(price: number): string {
    if (price < 50) return 'low';
    if (price <= 200) return 'medium';
    return 'high';
  }
}
