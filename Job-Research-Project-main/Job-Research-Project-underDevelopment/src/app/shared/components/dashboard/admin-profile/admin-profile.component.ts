import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'


import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsersService } from 'src/app/shared/services/users.service';
export interface PeriodicElement {
  employee_name: string;
  employee_salary: number;
  // manager: string;
  employee_age: number;
  id: number;
}

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {
  color='red';

 /********** for changing  profile  img */
  profileImgSrc:string="../../../assets/profile-img.jfif";
  changePhoto(event:any){
    //console.log(event.target.files);
    if(event.target.files)
    {
      var reader = new FileReader()
      console.log(reader.readAsDataURL);
      
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>
      {
        this.profileImgSrc =event.target.result
      }
    }}

 
/***** for input and control inputs *** */
adminInfo: FormGroup = new FormGroup({
    name: new FormControl({value:"abdelrahman" ,disabled:true  }),
    adress: new FormControl({value:" borg elarab ,alexandria ,egypt",disabled:true}),
    phoneNumber: new FormControl({value:"01553499532" ,disabled:true}),
    mail: new FormControl({value:"abdo.samir.7719@gmail.com" ,disabled:true}),
    bio: new FormControl({value:"chemist and front end" ,disabled:true}),

  })

  setborder:boolean=false;
  save(x:any){
   console.log(x.value);
    this.adminInfo.disable();
    this.setborder=false;   
  }
  edit()
  {
    this.adminInfo.enable();
    this.setborder=true;
  }
/************************************************** */
 usersList:any[]=[];
  constructor(userServices:UsersService) {
    
    userServices.gitUsers().subscribe((users) =>{
      this.usersList = users; },
      (err)=>{console.log("errors for users");}
    );

    
    
   }









  ngOnInit(): void {}



}







     /*************** for pagination***************** */
     
    /* onPageChange(event: PageEvent)
     {
       console.log(event);
       
       let startIndex = event.pageIndex * event.pageSize ;
       let endIndex = startIndex +event.pageSize;
       if(endIndex>this.usersList.length)
       {
         endIndex=this.usersList.length;
       }
       this.usersList=this.usersList.slice(startIndex,endIndex);
     
     }

     * for html
     *      <mat-paginator   [length]="this.usersList.length" [pageSize]="5"
              [pageSizeOptions]="[5, 10, 25, 100]"
         (page)="onPageChange($event)" 
                aria-label="Select page" >
              </mat-paginator> */


     /******************************** */
