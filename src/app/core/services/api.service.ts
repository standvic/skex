import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getRecipes() {
    return this.http
      .get<any[]>('https://api.spoonacular.com/recipes/search?apiKey=5f1cc00d4b304d4dafc122421bcae47e');
  }


}
