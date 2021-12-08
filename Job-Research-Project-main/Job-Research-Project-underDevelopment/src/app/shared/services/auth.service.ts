import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  getToken()
  {
    return localStorage.getItem('token')
  }
  register(username:any,email:any,password:any,confirmPassword:any,user:any):Observable<any>
  {
   return this.http.post<any>('http://docs.denizey.net/workshops/jobresearsh01/public/api/register',{name:username,email:email,password:password,password_confirmation:confirmPassword},user)
  }
  login(formLogin:any):Observable<any>
  {
   return this.http.post<any>('http://docs.denizey.net/workshops/jobresearsh01/public/api/login',formLogin)
  }
  logout():Observable<any>
  {
    let my_token = localStorage.getItem('token')
   return this.http.post<any>('http://docs.denizey.net/workshops/jobresearsh01/public/api/logout',{headers:new HttpHeaders(
    {
      'Authorization': `Bearer ${my_token}`
    }
   )})
  }
  updatePassword(formUpdate:any)
  {
    let my_token = localStorage.getItem('token')
   return this.http.post<any>('http://docs.denizey.net/workshops/jobresearsh01/public/api/update-password',formUpdate,{headers:new HttpHeaders(
    {
      'Authorization': `Bearer ${my_token}`
    }
   )})
  }
  
}

