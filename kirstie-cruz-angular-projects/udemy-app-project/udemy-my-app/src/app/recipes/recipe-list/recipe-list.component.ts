import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe ('A Test Recipe', 'This is simply a test', 'https://assets.bonappetit.com/photos/615dc5b7a99b3f199e10ce6a/1:1/w_1200%2Cc_limit/Adobo-Mushroom-Tacos-Alt.jpg'),
    new Recipe ('Another Test Recipe', 'This is simply a test', 'https://assets.bonappetit.com/photos/615dc5b7a99b3f199e10ce6a/1:1/w_1200%2Cc_limit/Adobo-Mushroom-Tacos-Alt.jpg')  
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
