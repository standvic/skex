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
      .get<any[]>('https://api.sketchfab.com/v3/search?type=models');
  }


}
