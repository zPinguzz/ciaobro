import { Component, computed, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DuckService } from '../../services/duck.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-duck-detail',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './duck-detail.html',
})
export class DuckDetail {
  private duckService = inject(DuckService);
  private cart = inject(CartService);

  id = input.required<string>(); // dal route param :id
  duck = computed(() => this.duckService.getById(Number(this.id())));

  addToCart(): void {
    const d = this.duck();
    if (d) this.cart.add(d);
  }
}