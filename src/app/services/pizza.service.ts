import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

import { Pizza } from '../models/pizza.model';
import { IngredientService } from './ingredient.service';
import {PIZZAS} from '../mock_data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzaArray: Pizza[] = PIZZAS;
  pizzaItemSelected = new Subject<Pizza>()

   constructor( private ingredientService:IngredientService) { }

  getPizzaArray(){
    return this.pizzaArray.slice();
  }

  addIngredientsToIngredinetList(ingredients:Ingredient[]){
    this.ingredientService.addIngredients(ingredients)
  }
 
}
