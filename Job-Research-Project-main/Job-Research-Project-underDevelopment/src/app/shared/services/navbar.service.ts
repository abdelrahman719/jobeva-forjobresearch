import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  isActive:boolean = true
  constructor() { }
  
  togglenavbar(active:boolean)
  {
    this.isActive = active
  }
}
