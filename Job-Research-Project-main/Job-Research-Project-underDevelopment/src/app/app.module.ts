
import { MaterialModule } from './shared/materials/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './shared/components/profile/profile.component';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AdminListComponent } from './shared/components/dashboard/admin/admin-list/admin-list.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AdminAddEditComponent } from './shared/components/dashboard/admin/admin-add-edit/admin-add-edit.component';
import { CompanyAddEditComponent } from './shared/components/dashboard/company/company-add-edit/company-add-edit.component';
import { CompanyListComponent } from './shared/components/dashboard/company/company-list/company-list.component';
import { UserAddEditComponent } from './shared/components/dashboard/user/user-add-edit/user-add-edit.component';
import { UserListComponent } from './shared/components/dashboard/user/user-list/user-list.component';
import { AdminProfileComponent } from './shared/components/dashboard/admin-profile/admin-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    AdminListComponent,
    FooterComponent,
   AdminAddEditComponent,
    CompanyListComponent,
   CompanyAddEditComponent,
   UserAddEditComponent,
    UserListComponent,
    AdminProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
