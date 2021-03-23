import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'pizzasSection',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css'],
  providers:[PizzaService]
})
export class PizzasComponent implements OnInit {

  pizzaItemSelected:Pizza;

  constructor(private pizzaService:PizzaService)  { }

  ngOnInit(): void {
    this.pizzaService.pizzaItemSelected.subscribe((pizza:Pizza)=>{
      this.pizzaItemSelected= pizza;
    })
  }
  
}
