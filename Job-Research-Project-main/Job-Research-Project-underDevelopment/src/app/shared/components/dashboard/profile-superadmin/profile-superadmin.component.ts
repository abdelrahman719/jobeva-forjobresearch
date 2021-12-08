import { Component, OnInit } from '@angular/core';
declare let AOS: any;

@Component({
  selector: 'app-profile-superadmin',
  templateUrl: './profile-superadmin.component.html',
  styleUrls: ['./profile-superadmin.component.scss']
})
export class ProfileSuperadminComponent implements OnInit {
  name:string="team Jobeva"
  url:string = "../../../../../assets/images/undraw_male_avatar_323b.svg"
  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration:1000,
      delay:100
    });
  }
  
  edit(event:any){
    if(event.target.files)
    {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>
      {
        this.url =event.target.result
      }
    }
  }
}
