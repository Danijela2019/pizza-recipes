import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';


@Component({
  selector: 'pizzaList',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzaArray: Pizza[] = [
    new Pizza('Capriciossa', 'Test description', '../../../../assets/images/pizza1.jpg'),
    new Pizza('Vege','Another test description','../../../../assets/images/pizza2.jpg')
  ];
  @Output() pizzaSelectFinal= new EventEmitter<Pizza>()

  constructor() { }

  ngOnInit(): void {
  }

  escalatePizzaUp(pizzaItem:Pizza) {
    this.pizzaSelectFinal.emit(pizzaItem)
  }
}
