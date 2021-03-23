import { Ingredient } from "./ingredient.model";

export class Pizza {
    public id:number;
    public name: string;
    public text: string;
    public image: string;
    public ingredients: Ingredient[];

    constructor(id:number,name:string, description:string, image:string, ingredients:Ingredient[]){
        this.id=id;
        this.name=name;
        this.text=description;
        this.image=image;
        this.ingredients= ingredients;
    }
}