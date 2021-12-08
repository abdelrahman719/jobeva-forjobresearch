import { Component, OnInit , ElementRef , ViewChild } from '@angular/core';
import { FormControl, FormGroup ,Validator } from '@angular/forms'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  personalData=[];
 profileImgSrc:string="../../../assets/profile-img.jfif";

  profileData: FormGroup = new FormGroup({
    name: new FormControl({value:"abdelrahman" ,disabled:true  }),
    adress: new FormControl({value:" borg elarab ,alexandria ,egypt",disabled:true}),
    phoneNumber: new FormControl({value:"01553499532" ,disabled:true}),
    mail: new FormControl({value:"abdo.samir.7719@gmail.com" ,disabled:true}),
    bio: new FormControl({value:"chemist and front end" ,disabled:true}),
    workExperience: new FormControl({value:"4 years as a chemist" ,disabled:true}),
    skills: new FormControl({value:" web developer" ,disabled:true}),
    education: new FormControl({value:" BCS of chemistry and geology" ,disabled:true}),

  })

  /*********************** for borders issues ************** */
  setborder:boolean=false;
  save(x:any){
   console.log(x.value);
   
    this.profileData.disable();
    this.setborder=false; 
  }
  edit()
  {
    this.profileData.enable();
    this.setborder=true;

  }
/************************************ */


 

  constructor( ) { 


    //this.fileUploader.addEventListener('change', () => {
    // const files = event.target.files;
   

    
  }


  changePhoto(event:any){
    //console.log(event.target.files);
    if(event.target.files)
    {
      var reader = new FileReader()
   //   console.log(reader.readAsDataURL(event.target.files[0]));
      
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>
      {
        this.profileImgSrc =event.target.result
      }
    }
    


  }


  ngOnInit(): void {
    const fileUploader = document.getElementById('profile-photo');
   
    


  }



}





