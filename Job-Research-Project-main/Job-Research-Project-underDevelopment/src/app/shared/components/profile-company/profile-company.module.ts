import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileCompanyRoutingModule } from './profile-company-routing.module';
import { ProfileCompanyComponent } from './profile-company.component';
import { MaterialModule } from '../../materials/material.module';


@NgModule({
  declarations: [
    ProfileCompanyComponent
  ],
  imports: [
    CommonModule,
    ProfileCompanyRoutingModule,
    MaterialModule
  ]
})
export class ProfileCompanyModule { }
