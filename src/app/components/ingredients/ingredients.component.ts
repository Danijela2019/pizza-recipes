import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'ingredientsSection',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
