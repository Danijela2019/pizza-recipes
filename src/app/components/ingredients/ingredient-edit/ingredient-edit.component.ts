import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'ingredientEdit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.css']
})
export class IngredientEditComponent implements OnInit, OnDestroy{
  @ViewChild('formData',{static:false}) ingrForm:NgForm;
  subscription:Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;
 

  constructor(private ingredientService:IngredientService) { }

  ngOnInit(): void {
    this.subscription= this.ingredientService.igredientUpdated.subscribe((index:number)=>{
      this.editedItemIndex=index;
      this.editMode=true;
      this.editedItem= this.ingredientService.getIngredient(index);
      this.ingrForm.setValue({
        description:this.editedItem.name,
        amount:this.editedItem.amount,
        measurment:this.editedItem.unit
      })
    })
  }
  onIngredientSubmit(formData:NgForm){
    const value = formData.value;
    if(value.description===null || value.amount===null|| value.measurment===null )return;
    const newIngredient = new Ingredient(value.description, value.amount, value.measurment);
    if(this.editMode){
      this.ingredientService.updateIngredient(this.editedItemIndex,newIngredient)
    } else{
    this.ingredientService.addIngredient(newIngredient)
    }
    this.editMode=false;
    formData.reset();
  }

  onReset(){
    this.ingrForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.ingredientService.deleteIngredient(this.editedItemIndex)
    this.onReset()

  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
