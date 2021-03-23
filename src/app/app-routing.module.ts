import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';

const routes: Routes = [
  { path: '',
  component: HomeComponent},
  { path: 'pizzas',
    component: PizzasComponent
  },
  { path: 'ingredients',
  component: IngredientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
