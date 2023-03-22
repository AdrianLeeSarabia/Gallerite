import { Component } from '@angular/core';
import { Product } from '../products';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  favs: Set<Product>;

  constructor(private favservice: FavoritesService) {
    this.favs = new Set<Product>(Array.from(this.favservice.favs).reverse());
  }
}
