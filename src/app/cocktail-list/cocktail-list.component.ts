import { Component } from '@angular/core';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent {
  cocktails: any;
  constructor(public CocktailService: CocktailService) {
    this.cocktails = CocktailService.getCocktails();
  }
}
