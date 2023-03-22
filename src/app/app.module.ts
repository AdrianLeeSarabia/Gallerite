import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FavoritesComponent } from './favorites/favorites.component';

import { FavoritesService } from './favorites.service';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    FavoritesComponent,
  ],
  providers: [FavoritesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
