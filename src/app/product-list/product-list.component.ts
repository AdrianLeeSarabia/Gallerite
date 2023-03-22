import { Component } from '@angular/core';

import { Product, products } from '../products';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(private favservice: FavoritesService) {}

  products = [...products];

  //Share button function provided in the HTML
  share(num: number) {
    window.alert('The product ' + num + ' has been faved!');
  }

  favorite(prod: Product) {
    this.favservice.addFavorite(prod);
  }
}
