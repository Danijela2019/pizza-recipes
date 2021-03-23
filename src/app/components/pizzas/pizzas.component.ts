import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'pizzasSection',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  pizzaItemSelected:Pizza;

  constructor() { }

  ngOnInit(): void {
  }
  onPizzaSelect($event:any){
    this.pizzaItemSelected= $event;
  }

}
