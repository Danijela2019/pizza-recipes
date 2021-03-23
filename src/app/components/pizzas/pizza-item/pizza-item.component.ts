import { Component, Input, OnInit} from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'pizzaItem',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza:Pizza;
  

  constructor(private pizzaService:PizzaService) { }

  ngOnInit(): void {
  }

  onClicked(){
    this.pizzaService.pizzaItemSelected.emit(this.pizza)
  }
  

}
