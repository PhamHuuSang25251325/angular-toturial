import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() handleRecipeSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A another Recipe', 'This is simply a A another Recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ]
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe :Recipe){
    this.handleRecipeSelected.emit(recipe);
  }

}
