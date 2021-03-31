import { Injectable} from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  ingredientsUpdated = new Subject<Ingredient[]>();
  igredientUpdated = new Subject<number>();
  private ingredientsArray:Ingredient[]=[];
   
  constructor() { }

  getIngredientsArray(){
    return this.ingredientsArray.slice();
  }

  getIngredient(index:number){
    return this.ingredientsArray[index];
  }

  addIngredient(ingredientItem:Ingredient){
    this.ingredientsArray.push(ingredientItem);
    this.ingredientsUpdated.next(this.ingredientsArray.slice());
  }
  addIngredients(ingredients:Ingredient[]){
    this.ingredientsArray.push(...ingredients);
    this.ingredientsUpdated.next(this.ingredientsArray.slice());
  }
  updateIngredient(index:number, newIngredient:Ingredient){
    this.ingredientsArray[index]= newIngredient;
    this.ingredientsUpdated.next(this.ingredientsArray.slice());
  }
  deleteIngredient(index:number){
    this.ingredientsArray.splice(index,1);
    this.ingredientsUpdated.next(this.ingredientsArray.slice());
  }
}
