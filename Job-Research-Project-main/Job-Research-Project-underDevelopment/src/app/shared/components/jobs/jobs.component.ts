import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { JobsService } from 'src/app/shared/services/jobs.service';
declare let AOS: any;

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
 
})
export class JobsComponent implements OnInit {
  search:string = ''
  jobs:any; 
  searchjobs:any;
  constructor(private _JobsService:JobsService,private _ActivatedRoute:ActivatedRoute,private location: Location) { }

  ngOnInit(): void {
    AOS.init({
      duration:1000,
    });
    if(this.location.path() == "/jobs/search")
    {
      this.getJobs()
    }else
    {
      this.searchJobs()
    }
    
  }
  getJobs()
  {
    this._JobsService.jobs().subscribe(
      (res)=>{
        this.jobs = res
        console.log(res)}
    )
  } 
  searchJobs()
  {
    this._ActivatedRoute.queryParams.subscribe((data) => 
      {this._JobsService.searchJobs(data.city,data.category).subscribe(
      (res)=>{
        this.jobs = res
        console.log(res)}
      )
    })
  }
}
