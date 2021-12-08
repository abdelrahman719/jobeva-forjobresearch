import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSuperadminRoutingModule } from './profile-superadmin-routing.module';
import { ProfileSuperadminComponent } from './profile-superadmin.component';
import { UserListComponent } from '../user/user-list/user-list.component';
import { AdminListComponent } from '../admin/admin-list/admin-list.component';
import { CompanyListComponent } from '../company/company-list/company-list.component';


@NgModule({
  declarations: [
    ProfileSuperadminComponent,
    // UserListComponent,
    // AdminListComponent,
    // CompanyListComponent,
  ],
  imports: [
    CommonModule,
    ProfileSuperadminRoutingModule,
  ]
})
export class ProfileSuperadminModule { }
