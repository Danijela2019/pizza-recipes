import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Pizza } from 'src/app/models/pizza.model';
import { DataStoreService } from 'src/app/services/data-store.service';
import { PizzaService } from 'src/app/services/pizza.service';


@Component({
  selector: 'pizzaList',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzaArray: Pizza[];
  subscription: Subscription;
 
  constructor(private pizzaService:PizzaService, private dataService:DataStoreService) { }

  ngOnInit(): void {
   
    this.subscription = this.pizzaService.pizzaArrayChanged
    .subscribe(
      (pizzaArray: Pizza[]) => {
        this.pizzaArray = pizzaArray;
      }
    );
    this.dataService.getPizzas();
  }
  
  ngOnDestroy():void {
    this.subscription.unsubscribe()
  }
  
}
