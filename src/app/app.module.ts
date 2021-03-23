import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IngredientListComponent } from './components/ingredients/ingredient-list/ingredient-list.component';
import { PizzaListComponent } from './components/pizzas/pizza-list/pizza-list.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { IgredientItemComponent } from './components/ingredients/ingredient-item/igredient-item.component';
import { PizzaItemComponent } from './components/pizzas/pizza-item/pizza-item.component';
import { PizzaDetailsComponent } from './components/pizzas/pizza-details/pizza-details.component';
import { IngredientEditComponent } from './components/ingredients/ingredient-edit/ingredient-edit.component';
import { HomeComponent } from './components/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngredientListComponent,
    PizzaListComponent,
    IngredientsComponent,
    PizzasComponent,
    IgredientItemComponent,
    PizzaItemComponent,
    PizzaDetailsComponent,
    IngredientEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
