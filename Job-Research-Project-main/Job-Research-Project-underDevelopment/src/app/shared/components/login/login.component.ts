import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
declare let AOS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  hide = true;
  res:any
  formLogin!: FormGroup ;
  constructor(private _AuthService:AuthService,private router:Router,private fb:FormBuilder) { 
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      persistent:true
    })
  }

  ngOnInit(): void {
    AOS.init({
      duration:1000,
      delay:100
    });
  }
  onSubmit(formLogin:any)
  {
    this._AuthService.login(formLogin.value).subscribe(
      (res) => {
        this.res = res
            if(res?.status == 200)
          {
            this.router.navigate(['/profile'])
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('name',res.data.user.name)
            localStorage.setItem('email',res.data.user.email)
            console.log(this.res)

          }
        }
    )
  }
}
