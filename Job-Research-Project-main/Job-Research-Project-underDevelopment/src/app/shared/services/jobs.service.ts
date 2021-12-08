import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private _HttpClient:HttpClient) { }

  jobs():Observable<any>
  {
    let my_token = localStorage.getItem('token')
    return this._HttpClient.get('http://docs.denizey.net/workshops/jobresearsh01/public/api/jobs',{headers: new HttpHeaders(
      {
        'Authorization': `Bearer ${my_token}`
      }
    )})
  }
  searchJobs(city:any,category:any)
  {
    return this._HttpClient.get('http://docs.denizey.net/workshops/jobresearsh01/public/api/jobs/search?city='+city+'&category='+category+'')
  }
  JobsShow(id:any)
  {
    return this._HttpClient.get('http://docs.denizey.net/workshops/jobresearsh01/public/api/jobs/show?job_id='+id+'')
  }
  createJob(form:any)
  {
    let my_token = localStorage.getItem('token')
    return this._HttpClient.post('http://docs.denizey.net/workshops/jobresearsh01/public/api/jobs/create',form,{headers: new HttpHeaders(
      {
        'Authorization': `Bearer ${my_token}`
      }
    )})
  }
  Apply(resume:any,id:any)
  {
    let my_token = localStorage.getItem('token')
    return this._HttpClient.post('http://docs.denizey.net/workshops/jobresearsh01/public/api/jobs/apply',{resume:resume,job_id:id},{headers: new HttpHeaders(
      {
        'Authorization': `Bearer ${my_token}`
      }
    )})
  }
}
