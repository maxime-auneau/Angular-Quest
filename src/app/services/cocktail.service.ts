import { Injectable } from '@angular/core';
import { CocktailModel } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {}

  getCocktails() {
    const cocktails: CocktailModel[] = [
      new CocktailModel(
        'Mojito',
        8.5,
        'https://www.cocktails-road.fr/images/recipe/2021/03/mojito.jpg'
      ),
      new CocktailModel(
        'Cosmopolitan',
        150,
        'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/80274_origin-scaled.jpg'
      ),
      new CocktailModel(
        'Pina Colada',
        200,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvYFp6uevaPQaHi4MtntEfWC_J85uqtU3bg&usqp=CAU'
      ),
    ];

    return cocktails;
  }
}
