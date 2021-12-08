import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private _HttpClient:HttpClient) { }
  location()
  {
    let my_token = localStorage.getItem('token')
    return this._HttpClient.get('http://docs.denizey.net/workshops/jobresearsh01/public/api/locations',{headers: new HttpHeaders(
      {
        'Authorization': `Bearer ${my_token}`
      }
    )})
  }
}
