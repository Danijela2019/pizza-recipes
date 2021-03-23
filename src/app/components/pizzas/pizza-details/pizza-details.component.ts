import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'pizzaDetails',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {
  @Input() pizzaItem:Pizza;

  constructor(private pizzaService:PizzaService) { }

  ngOnInit(): void {
  }
  onAddToIngredientList(){
    console.log('Here', this.pizzaItem.ingredients)
    this.pizzaService.addIngredientsToIngredinetList(this.pizzaItem.ingredients)
  }

}
