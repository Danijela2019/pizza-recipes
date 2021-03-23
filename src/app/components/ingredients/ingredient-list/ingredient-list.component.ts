import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'ingredientList',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredientsArray:Ingredient[];

  constructor(private ingredientService:IngredientService) { }

  ngOnInit(): void {
    this.ingredientsArray= this.ingredientService.getIngredientsArray();
    this.ingredientService.ingredientsUpdated.subscribe((ingredientsArray:Ingredient[])=>{
      console.log('Now in ing List', ingredientsArray)
      this.ingredientsArray= ingredientsArray;
    })
  }
}
