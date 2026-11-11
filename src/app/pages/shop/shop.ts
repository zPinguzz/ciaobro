import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DuckService } from '../../services/duck.service';
import { CartService } from '../../services/cart.service';
import { Duck, DuckCategory } from '../../models/duck.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './shop.html',
})
export class Shop {
  private duckService = inject(DuckService);
  private cart = inject(CartService);

  categories: (DuckCategory | 'all')[] = ['all', 'classic', 'themed', 'giant'];
  selected = signal<DuckCategory | 'all'>('all');
  search = signal('');

  ducks = computed(() =>
    this.duckService.getAll().filter(d =>
      (this.selected() === 'all' || d.category === this.selected()) &&
      d.name.toLowerCase().includes(this.search().toLowerCase())
    )
  );

  onSearch(event: Event): void {
    this.search.set((event.target as HTMLInputElement).value);
  }

  addToCart(duck: Duck): void {
    this.cart.add(duck);
  }
}