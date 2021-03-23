import { Pizza } from "./models/pizza.model";
import { Ingredient } from "./models/ingredient.model"


export const PIZZAS: Pizza[] = [
    new Pizza(1,
         'Margarita',
         'Easy to make, vegetarian pizza with lots of vegetables.',
         '../assets/images/pizza_images/pizza1.jpg',
         [
         new Ingredient('cheese',200,'grams'),
         new Ingredient('pepers',2,'pieces'),
         new Ingredient('onion',1,'piece')
         ]
    ),
    new Pizza(2,
        'Salami',
        'Tasty italian salami pizza with lots of cheese and olives.',
        '../assets/images/pizza_images/pizza2.jpg',
        [
        new Ingredient('cheese',100,'grams'),
        new Ingredient('olives',50,'grams'),
        new Ingredient('salami',200,'grams')
        ]
    ),
    new Pizza(3,
        'Capricciosa',
        'The most famous and available pizza with ham and cheese.',
        '../assets/images/pizza_images/pizza3.jpg',
        [
        new Ingredient('cheese',150,'grams'),
        new Ingredient('olives',20,'grams'),
        new Ingredient('ham',100,'grams')
        ]
    ),
    new Pizza(4,
        'Pepperoni',
        'Another spicy treat with lots of italian pepperoni, onion and tomatoes.',
        '../assets/images/pizza_images/pizza4.jpg',
        [
        new Ingredient('pepperony',100,'grams'),
        new Ingredient('olives',10,'grams'),
        new Ingredient('tomatoes',2,'pieces'),
        new Ingredient('onion',1,'pieces')
        ]
    ),
    new Pizza(5,
        'Cheese',
        'Vegetarian pizza alternative with 4 diffrent kinds of cheese.',
        '../assets/images/pizza_images/pizza5.jpg',
        [
        new Ingredient('cedar',100,'grams'),
        new Ingredient('edamer',50,'grams'),
        new Ingredient('tomatoes',2,'pieces'),
        new Ingredient('gauda',100,'grams')
        ]
    )
]