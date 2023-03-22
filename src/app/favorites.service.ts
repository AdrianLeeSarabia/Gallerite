import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  // Use set for distinct posts

  favs: Set<Product>;
  constructor() {
    // Initialize as empty set
    this.favs = new Set<Product>();
  }

  addFavorite(prod: Product) {
    this.favs.add(prod);
  }

  removeFavorite(prod: Product) {
    this.favs.delete(prod);
  }
}
