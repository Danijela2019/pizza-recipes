import { Injectable } from '@angular/core';
import { PizzaService } from './pizza.service';
import {HttpClient} from '@angular/common/http'
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(private http:HttpClient, private pizzaService:PizzaService) { }

  getPizzas(){
    this.http.get<Pizza[]>('https://pizza-recipes-fb56e-default-rtdb.firebaseio.com/pizzas.json')
    .subscribe((res)=> this.pizzaService.setPizzaArray(res))
  }
}