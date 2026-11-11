import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'shop', loadComponent: () => import('./pages/shop/shop').then(m => m.Shop) },
  { path: 'shop/:id', loadComponent: () => import('./pages/duck-detail/duck-detail').then(m => m.DuckDetail) },
  { path: 'cart', loadComponent: () => import('./pages/cart/cart').then(m => m.Cart) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: '**', redirectTo: '' },
];