import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
declare let AOS: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  hide = true;
  hide2 = true;
  res: any
  error: any
  formRegiter!: FormGroup;
  user:any
  constructor(private _AuthService: AuthService, private router: Router, private fb: FormBuilder) {

    this.formRegiter = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      delay: 100
    });
  }
  onSubmit() {
    // There is a problem with the json arrangement when use (formRegister.value)
    this._AuthService.register(this.formRegiter.controls.username.value, this.formRegiter.controls.email.value, this.formRegiter.controls.password.value, this.formRegiter.controls.confirmPassword.value , this.user)
      .subscribe(
        (res) => {
          this.res = res
          if (this.res?.status == 200) {
            this.router.navigate(['/login'])
          }
          else
          {
            return
          }
        },(error)=>{
          console.log('error',error)
        }
      )
  }

}
