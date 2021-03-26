import { Ingredient } from "./ingredient.model";

export class Pizza {
    public name: string;
    public text: string;
    public image: string;
    public ingredients: Ingredient[];

    constructor(name:string, description:string, image:string, ingredients:Ingredient[]){
        this.name=name;
        this.text=description;
        this.image=image;
        this.ingredients= ingredients;
    }
}