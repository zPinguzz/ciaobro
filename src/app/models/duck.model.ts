export type DuckCategory = 'classic' | 'themed' | 'giant';

export interface Duck {
  id: number;
  name: string;
  description: string;
  price: number;
  category: DuckCategory;
  image: string;
  inStock: boolean;
}

export interface CartItem {
  duck: Duck;
  quantity: number;
}