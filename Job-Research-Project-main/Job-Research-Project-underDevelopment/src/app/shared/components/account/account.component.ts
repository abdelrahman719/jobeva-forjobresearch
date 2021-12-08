import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  hide = true;
  hide2 = true;
  message:any
  formUpdate!:FormGroup
  constructor(private fb:FormBuilder , private _AuthService:AuthService) {
    this.formUpdate = this.fb.group({
      old_password: ['',[Validators.required,Validators.minLength(8)]],
      new_password: ['',[Validators.required,Validators.minLength(8)]]
    })
   }

  ngOnInit(): void {
  }
  submiteUpdate(formUpdate:FormGroup)
  {
    this._AuthService.updatePassword(formUpdate.value).subscribe(
      (res) => {
        this.message = res
        console.log(this.message)
      }
    )
  }
}
