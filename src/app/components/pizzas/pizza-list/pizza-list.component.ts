import { Component, OnInit} from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';


@Component({
  selector: 'pizzaList',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzaArray: Pizza[];
 
  constructor(private pizzaService:PizzaService) { }

  ngOnInit(): void {
    this.pizzaArray = this.pizzaService.getPizzaArray()
  }
}
