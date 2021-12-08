import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/shared/services/category.service';
import { JobTypesService } from 'src/app/shared/services/job-types.service';
import { JobsService } from 'src/app/shared/services/jobs.service';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
})
export class ProfileCompanyComponent implements OnInit {
  category:any
  jobTypes:any
  location:any
  jobs:any
  formCompany!:FormGroup
  constructor(
    private _CategoryService:CategoryService,
    private _JobTypesService:JobTypesService,
    private _LocationService:LocationService,
    private _JobsService:JobsService
    ) { 
    this.formCompany = new FormGroup({
      title : new FormControl('',[Validators.required]),
      salary_range: new FormControl('',[Validators.required]),
      requirements: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      years_of_experience: new FormControl('',[Validators.required]),
      category_id: new FormControl('',[Validators.required]),
      company_id: new FormControl('19',[Validators.required]),
      location_id: new FormControl('',[Validators.required]),
      job_type_id: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    this._CategoryService.Category().subscribe((res)=> {
      this.category = res
    })
    this._JobTypesService.jobTypes().subscribe((res)=>{
      this.jobTypes = res
    })
    this._LocationService.location().subscribe((res)=>{
      this.location = res
      console.log(this.location)
    })
    this._JobsService.jobs().subscribe(
      (res)=>{
        this.jobs = res
        console.log(res)}
    )
  }
  createJobs(form:FormGroup)
  {
    console.log(form.value)
    this._JobsService.createJob(form.value).subscribe((res)=>{
      console.log(res)
    })
  }

}
