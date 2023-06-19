import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(public http: HttpClient) {}

  getImageOfTheDay(): Observable<string> {
    return this.http.get<string>(
      'https://api.nasa.gov/planetary/apod?api_key=M01M9UoMn29BTcTy6fS9ehSafjGaBPlHCadfABMJ'
    );
  }
}
