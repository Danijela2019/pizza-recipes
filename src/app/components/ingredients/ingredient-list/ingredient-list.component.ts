import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'ingredientList',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit, OnDestroy {
  ingredientsArray:Ingredient[];
  private storedSubscription:Subscription;

  constructor(private ingredientService:IngredientService) { }

  ngOnInit(): void {
    this.ingredientsArray= this.ingredientService.getIngredientsArray();
    this.storedSubscription= this.ingredientService.ingredientsUpdated.subscribe((ingredientsArray:Ingredient[])=>{
    this.ingredientsArray= ingredientsArray;
    })
  }
  onEditIngredient(itemId:number){
    this.ingredientService.igredientUpdated.next(itemId)
  }
  ngOnDestroy() :void{
    this.storedSubscription.unsubscribe();
  } 

}
