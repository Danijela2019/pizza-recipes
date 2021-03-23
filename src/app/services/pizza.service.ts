import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

import { Pizza } from '../models/pizza.model';
import { IngredientService } from './ingredient.service';
import {PIZZAS} from '../mock_data';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzaArray: Pizza[] = PIZZAS;
  pizzaItemSelected = new EventEmitter<Pizza>()

   constructor( private ingredientService:IngredientService) { }

  getPizzaArray(){
    return this.pizzaArray.slice();
  }

  addIngredientsToIngredinetList(ingredients:Ingredient[]){
    console.log('Ingredients',ingredients)
    this.ingredientService.addIngredients(ingredients)
  }
 
}
