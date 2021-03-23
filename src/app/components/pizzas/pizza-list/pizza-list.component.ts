import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';


@Component({
  selector: 'pizzaList',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzaArray: Pizza[];
 
  constructor(private pizzaService:PizzaService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.pizzaArray = this.pizzaService.getPizzaArray()
  }
  onNewPizza() {
    this.router.navigate(['new'],{relativeTo:this.route} )
  }
}
