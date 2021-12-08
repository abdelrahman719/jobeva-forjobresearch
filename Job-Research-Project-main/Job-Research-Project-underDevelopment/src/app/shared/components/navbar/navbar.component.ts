import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
 isLogin:any
 name:any
 email:any
 togleMenu:boolean = false
  constructor(private _AuthService:AuthService,private router:Router) { }
  

  ngOnInit(): void {
    this.isLogin = this._AuthService.getToken()
    this.name = localStorage.getItem('name')
    this.email = localStorage.getItem('email')

  }
  Logout()
  {
    if( this._AuthService.getToken())
    {
      this._AuthService.logout()
      localStorage.clear()
      this.router.navigate(['/login'])
    }
  }
  clickToggle() {
    this.togleMenu = !this.togleMenu
  }
}
