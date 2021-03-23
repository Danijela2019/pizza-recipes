import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'pizzaDetails',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {
  @Input() pizzaItem:Pizza;

  constructor() { }

  ngOnInit(): void {
  }

}
