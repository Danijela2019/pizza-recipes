import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

import { Pizza } from '../models/pizza.model';
import { IngredientService } from './ingredient.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzaArray: Pizza[] = [];
  pizzaItemSelected = new Subject<Pizza>()
   pizzaArrayChanged = new Subject<Pizza[]>();

   constructor( private ingredientService:IngredientService) { }

  getPizzaArray(){
    return this.pizzaArray.slice();
  }

  setPizzaArray(response:Pizza[]){
    this.pizzaArray = response;
    this.pizzaArrayChanged.next(this.pizzaArray.slice());
  }


  addIngredientsToIngredinetList(ingredients:Ingredient[]){
    this.ingredientService.addIngredients(ingredients)
  }
 
}
