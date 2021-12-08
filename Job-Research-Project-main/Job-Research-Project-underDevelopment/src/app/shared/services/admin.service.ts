import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
getAllAdmins(){
  let my_token = localStorage.getItem('token')
  return this.http.get('http://docs.denizey.net/workshops/jobresearsh01/public/api/admins',{headers: new HttpHeaders(
    {
      'Authorization': `Bearer ${my_token}`
    }
  )})
}
deleteAdmin(id:any){
  let my_token = localStorage.getItem('token')
  return this.http.post('http://docs.denizey.net/workshops/jobresearsh01/public/api/admins/delete',{admin_id:id},{headers: new HttpHeaders(
    {
      'Authorization': `Bearer ${my_token}`
    }
  )})
}
addAdmin(data:any){
  return this.http.post('http://dummy.restapiexample.com/api/v1/create',data)
}
updateAdmin(id:any,data:any){
  return this.http.put(`http://dummy.restapiexample.com/api/v1/update/${id}`,data)
}
getAdminById(id:any){
  return this.http.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
}
}
