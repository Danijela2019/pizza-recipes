import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'pizzaItem',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza:Pizza;
  @Output() pizzaCardClicked = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }
  onClicked(){
    this.pizzaCardClicked.emit();
  }

}
