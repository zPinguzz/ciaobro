import { Injectable, computed, signal } from '@angular/core';
import { CartItem, Duck } from '../models/duck.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _items = signal<CartItem[]>([]);

  items = this._items.asReadonly();
  count = computed(() => this._items().reduce((n, i) => n + i.quantity, 0));
  total = computed(() => this._items().reduce((t, i) => t + i.duck.price * i.quantity, 0));

  add(duck: Duck): void {
    this._items.update(items => {
      const found = items.find(i => i.duck.id === duck.id);
      return found
        ? items.map(i => (i.duck.id === duck.id ? { ...i, quantity: i.quantity + 1 } : i))
        : [...items, { duck, quantity: 1 }];
    });
  }

  remove(id: number): void {
    this._items.update(items => items.filter(i => i.duck.id !== id));
  }

  setQuantity(id: number, quantity: number): void {
    if (quantity <= 0) return this.remove(id);
    this._items.update(items => items.map(i => (i.duck.id === id ? { ...i, quantity } : i)));
  }

  clear(): void {
    this._items.set([]);
  }
}
