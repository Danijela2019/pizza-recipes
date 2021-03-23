import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'ingredientEdit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.css']
})
export class IngredientEditComponent implements OnInit {

  constructor(private ingredientService:IngredientService) { }

  ngOnInit(): void {
  }
  onAddIngredient(){
    
  }

}
