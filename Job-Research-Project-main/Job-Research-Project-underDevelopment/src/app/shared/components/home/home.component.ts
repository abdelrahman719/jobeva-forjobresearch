import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import SwiperCore, { Pagination, Navigation, EffectFade } from "swiper";
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { Router } from '@angular/router';
declare let AOS: any;

// install Swiper modules
SwiperCore.use([Pagination, Navigation, EffectFade]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  toggleColor: boolean = true
  togleMenu: boolean = false
  slide = [
    { name: 'eng/Abd Elrhman Samir', review: 'Its well worth the small fee for the quality of jobs listed. I never thought I would, but I found the perfect job within a month with FlexJobs!', image: '../../../../assets/images/undraw_male_avatar_323b.svg' }
    , { name: 'eng/badwy Elnesr', review: 'KEEP UP THE GOOD WORK!!! In two weeks, I found a job... I could not believe it, but it happened. The pay, job, benefits, and working at home are all awesome!', image: '../../../../assets/images/undraw_male_avatar_323b.svg' }
    , { name: 'eng/Doaa', review: 'Thank you for the opportunity to find a great job! My local job market is very limited, and I found a great job I enjoy doing.', image: '../../../../assets/images/undraw_female_avatar_w3jk.svg' }
  ]
  isActive: boolean = false

  constructor(private router:Router) { }

  ngOnInit(): void {
    /***************animate AOS************/
    AOS.init({
      duration: 800,
      delay: 100
    });
    /*******************slide down navbar*****************/
    window.addEventListener("scroll", function () {
      let header = this.document.getElementById("header");
      let prand = this.document.getElementById("prand");
      let login = this.document.getElementById("login");
      let menu = this.document.getElementById("menu");

      header?.classList.toggle("fixed", window.scrollY > 400)
      prand?.classList.toggle("color-prand", window.scrollY > 400)
      login?.classList.toggle("color-black", window.scrollY > 400)
      menu?.classList.toggle("color-black", window.scrollY > 400)

    })
  }
  /***************Icon scrollDown********/
  scrollDown(ele: any) {
    ele.scrollIntoView({
      behavior: 'smooth',
    });
  }
  /****************toggle Menu*******/
  clickToggle() {
    this.togleMenu = !this.togleMenu
  }
  OnSearch(f:any)
  {
    let form = f.control.value
    this.router.navigate(['/jobs/search'],{queryParams:{'city':form.location,'category':form.category}})
  }
}
