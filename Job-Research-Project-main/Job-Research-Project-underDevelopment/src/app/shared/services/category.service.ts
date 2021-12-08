import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient:HttpClient) { }

  Category()
  {
    return this._HttpClient.get('http://docs.denizey.net/workshops/jobresearsh01/public/api/categories')
  }
}
