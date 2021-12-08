import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobTypesService {

  constructor(private _HttpClient:HttpClient) { }
  jobTypes()
  {
    let my_token = localStorage.getItem('token')
    return this._HttpClient.get('http://docs.denizey.net/workshops/jobresearsh01/public/api/Job-types',{headers: new HttpHeaders(
      {
        'Authorization': `Bearer ${my_token}`
      }
    )})
  }
}
