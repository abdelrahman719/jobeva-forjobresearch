import {  Component, Renderer2 } from '@angular/core';
import { NavbarService } from './shared/services/navbar.service';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jobResearch';
  showLoader: boolean = true;
  isActive: boolean = true
  constructor(private renderer: Renderer2, private location: Location, private navbar: NavbarService, private router: Router) { }


  ngOnInit(): void {

    /******************get location component**********/
    this.router.events.subscribe(val => {
      if (this.location.path() == "/home" || this.location.path() == "/login" || this.location.path() == "/register" || this.location.path() == "/superAdmin") {
        this.navbar.togglenavbar(false)
        this.isActive = this.navbar.isActive
      } else {
        this.navbar.togglenavbar(true)
        this.isActive = this.navbar.isActive
      }
    });
  }

  ngAfterViewInit() {
    let loader = this.renderer.selectRootElement('#loader');
    this.renderer.setStyle(loader, 'display', 'none');
  }



}
