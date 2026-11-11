import { Injectable } from '@angular/core';
import { Duck } from '../models/duck.model';

@Injectable({ providedIn: 'root' })
export class DuckService {
  private ducks: Duck[] = [
    { id: 1, name: 'Classic Yellow', description: 'La paperella gialla di sempre.', price: 4.99, category: 'classic', image: 'assets/ducks/classic.png', inStock: true },
    { id: 2, name: 'Pirate Duck', description: 'Capitan Quack con benda e cappello.', price: 7.5, category: 'themed', image: 'assets/ducks/pirate.png', inStock: true },
    { id: 3, name: 'Astronaut Duck', description: 'Pronta per la luna (e per la vasca).', price: 8.9, category: 'themed', image: 'assets/ducks/astronaut.png', inStock: false },
    { id: 4, name: 'Giant Duck', description: '50 cm di puro divertimento.', price: 29.99, category: 'giant', image: 'assets/ducks/giant.png', inStock: true },
  ];

  getAll(): Duck[] {
    return this.ducks;
  }

  getById(id: number): Duck | undefined {
    return this.ducks.find(d => d.id === id);
  }

  getFeatured(): Duck[] {
    return this.ducks.slice(0, 3);
  }
}
