import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
recipes: Recipe[] = [
  new Recipe('A test Recipe','this is simply a test', 'https://www.cookipedia.co.uk/wiki/images/9/96/Cheese_sauce_%28TM%29_recipe.jpg'),
  new Recipe('A test Recipe','this is simply a test', 'https://www.cookipedia.co.uk/wiki/images/9/96/Cheese_sauce_%28TM%29_recipe.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
