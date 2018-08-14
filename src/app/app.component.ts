import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  newRecipe: Recipe[] = [new Recipe('Fried Rice', ['Salt', 'Soy Sauce', 'Osyter Sauce', 'Rice', 'Egg', 'Green Onion'], ['Add oil to wok', 'Stir-fry egg and remove', 'Stir-fry protein and remove', 'Stir-fry vegetables', 'Add room temp rice and mix', 'Add: soy sauce, oyster sauce, white pepper', 'Salt to taste', 'Top with green onions and egg.'])]
}
