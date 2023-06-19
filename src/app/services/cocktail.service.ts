import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CocktailModel } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public http: HttpClient) {}

  getCocktails(): Observable<CocktailModel[]> {
    return this.http.get<CocktailModel[]>("assets/data.json");
  }

}