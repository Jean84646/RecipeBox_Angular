import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  newRecipe: Recipe[] = [new Recipe('Fried Rice', ['Salt', 'Soy Sauce', 'Osyter Sauce', 'Rice', 'Egg', 'Green Onion'], ['Add oil to wok', 'Stir-fry egg and remove', 'Stir-fry protein and remove', 'Stir-fry vegetables', 'Add room temp rice and mix', 'Add: soy sauce, oyster sauce, white pepper', 'Salt to taste', 'Top with green onions and egg.']), new Recipe('Chicken Sandwich', ['Boneless and skinless chicken-thigh', 'Flour: all-purpose, mochiko, corn-starch', 'Buttermilk', 'hotsauce', 'brioche or sweet burger buns', 'deli pickles', 'Japanese mayo', 'Lettuce', 'Salt and Spices'], ['Cut and pound boneless and skinless chicken-thigh into cultet', 'Season with salt and spices of your choice', 'Refrigerate for 60 minutes', 'Soak chicken-thigh in Buttermilk mix with hotsauce for 30 minutes', 'Mix all-purpose flour with mochiko flour, and corn starch', 'Season the flour mixture with spices and salt', 'Drench your chicken-thigh in the flour mix', 'Let the coated chicken-thigh sit ontop of a wire rack for 10 minutes', 'Fry the chicken in 375 degrees oil for 5-7 minutes at medium high', 'Take out and season with salt and spice immediately', 'Warm brioche or sweet burger bun and brush with oil', 'Use Japanese mayo only and add lettuce, and pickles'])]
}
