import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/shared/services/jobs.service';

@Component({
  selector: 'app-jobs-show',
  templateUrl: './jobs-show.component.html',
})
export class JobsShowComponent implements OnInit {
  jobDetails:any
  show:boolean=false
  form!:FormGroup
  constructor(private _JobsService:JobsService,private _ActivatedRoute:ActivatedRoute ,private _FormBuilder:FormBuilder) { 
    this.form = this._FormBuilder.group({
      resume:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this._ActivatedRoute.queryParams.subscribe((id)=>{
      this._JobsService.JobsShow(id.job_id).subscribe((res)=>{
        this.jobDetails = res
        console.log( this.jobDetails)
      })
    })
  }
  Apply()
  {
    this.show = true
  }
  close()
  {
    this.show = false
  }
  formApply(Apply:FormGroup)
  {
    this._ActivatedRoute.queryParams.subscribe((id)=>{
      this._JobsService.Apply(Apply.value.resume,id).subscribe((res)=>{
        console.log(res)}
      )
      console.log(Apply.value.resume)
    })
  }

}
