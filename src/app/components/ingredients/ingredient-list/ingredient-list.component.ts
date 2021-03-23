import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'ingredientList',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredientsArray:Ingredient[]=[
    new Ingredient('tomatos', 5,'pieces'),
    new Ingredient ('bacon',200,'grams')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
