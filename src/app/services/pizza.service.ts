import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

import { Pizza } from '../models/pizza.model';
import { IngredientService } from './ingredient.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzaArray: Pizza[] = [
    new Pizza('Capriciossa', 
    'Test description', 
    '../../../../assets/images/pizza1.jpg',
    [new Ingredient("tomato",2,"pieces"),new Ingredient("bacon",300,"grams")]),
    new Pizza('Vege',
    'Another test description',
    '../../../../assets/images/pizza2.jpg',
    [new Ingredient("onion",1,"pieces"),new Ingredient("cedar",200,"grams")]),
    
  ];
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
