import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe ('Chicken Adobo', 'A Classic Filipino Dish - Braised Chicken in Soy-based Marinade', 'https://recipetineats.com/wp-content/uploads/2015/02/Filipino-Chicken-Adobo_6.jpg', [
            new Ingredient('Chicken', 2),
            new Ingredient ('Soy Sauce', 1),
            new Ingredient ('White Vinegar', 1),
            new Ingredient ('Black Pepper', 1),
            new Ingredient ('Garlic', 3),
            new Ingredient ('Laurel Leaf', 2)
        ]),
        new Recipe ('Pork Sinigang', 'Pork Simmered in Tamarind Soup', 'https://panlasangpinoy.com/wp-content/uploads/2017/03/Sinigang-na-Baboy-with-Gabi-Panlasang-Pinoy-500x488.jpg', [
            new Ingredient('Pork Cubes', 2),
            new Ingredient ('Tamarind Paste', 2),
            new Ingredient ('Tomato', 4),
            new Ingredient ('Spinach', 1),
            new Ingredient ('Radish', 1)
        ])  
      ]; 

    constructor(private slService: ShoppingListService) {}  

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}