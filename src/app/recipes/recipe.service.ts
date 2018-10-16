import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Lovely Schnitzel',
      'This is simply a test',
      'https://i3-img.7tv.de/pis/ezone/b85cqgELB38wdEB0AB1fHPDQCtTDCJ4UYl_Ic-IXCoYylZ0mXbP3Z8_B4JBo6LCimhDa22AtrTM8DB_M9Sv4e9OM8slbXthgEbE4ubOs1rnC2jOcxZ9a-oZ09bK01Tt0b1vpGmsgVYDky7gxWa9Ji7hMq0kR_pQ2jRtK2fQmW4rytj1AFXX-l6q3zvzGC0WR4MrZm2eVebI8dVElyIxxoffiauzSGJCqKiLU64nsO3YYm77aW-CmLiBxue3Xb7cEvMfmUM1lzYjwCbSan5Q7lQCikI2SfI2G/profile:mag-996x562',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Potato', 3)
      ]),
    new Recipe(
      'Big Burger',
      'This is simply a test',
      'https://emmentaler-pizza.ch/wp-content/uploads/2017/10/burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 2)
      ])
  ];
  
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
