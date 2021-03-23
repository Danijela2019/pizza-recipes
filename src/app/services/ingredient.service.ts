import { Injectable,EventEmitter} from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  ingredientsUpdated = new EventEmitter<Ingredient[]>();
  private ingredientsArray:Ingredient[]=[
    new Ingredient('tomatos', 5,'pieces'),
    new Ingredient ('bacon',200,'grams')
  ];

  constructor() { }

  getIngredientsArray(){
    return this.ingredientsArray.slice()
  }
  addIngredient(ingredientItem:Ingredient){
    this.ingredientsArray.push(ingredientItem);
    this.ingredientsUpdated.emit(this.ingredientsArray.slice())
  }
  addIngredients(ingredients:Ingredient[]){
    this.ingredientsArray.push(...ingredients)
    this.ingredientsUpdated.emit(this.ingredientsArray.slice())
  }
}
