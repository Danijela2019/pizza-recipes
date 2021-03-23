import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';
import {Router} from '@angular/router'

@Component({
  selector: 'pizzaDetails',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {
  @Input() pizzaItem:Pizza;

  constructor(private pizzaService:PizzaService, private router:Router) { }

  ngOnInit(): void {
  }
  onAddToIngredientList(){
    this.pizzaService.addIngredientsToIngredinetList(this.pizzaItem.ingredients)
  }

  onRedirectToIngredientList(){
    this.router.navigate(['/ingredients']);
  }

}
