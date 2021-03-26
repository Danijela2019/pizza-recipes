import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IngredientListComponent } from './components/ingredients/ingredient-list/ingredient-list.component';
import { PizzaListComponent } from './components/pizzas/pizza-list/pizza-list.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { PizzaItemComponent } from './components/pizzas/pizza-item/pizza-item.component';
import { PizzaDetailsComponent } from './components/pizzas/pizza-details/pizza-details.component';
import { IngredientEditComponent } from './components/ingredients/ingredient-edit/ingredient-edit.component';
import { HomeComponent } from './components/home/home/home.component';
import { FormsModule } from '@angular/forms';
import { DropDownDirective } from './directives/dropDown.directive';
import { IngredientService } from './services/ingredient.service';
import { PlaceholderComponent } from './components/pizzas/placeholder/placeholder.component';
import { HttpClientModule } from '@angular/common/http'
import { DataStoreService } from './services/data-store.service';
import { PizzaService } from './services/pizza.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngredientListComponent,
    PizzaListComponent,
    IngredientsComponent,
    PizzasComponent,
    PizzaItemComponent,
    PizzaDetailsComponent,
    IngredientEditComponent,
    HomeComponent,
    PlaceholderComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IngredientService,DataStoreService,PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
