import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './shared/components/dashboard/admin-profile/admin-profile.component';
import { AdminAddEditComponent } from './shared/components/dashboard/admin/admin-add-edit/admin-add-edit.component';
import { AdminListComponent } from './shared/components/dashboard/admin/admin-list/admin-list.component';
import { CompanyAddEditComponent } from './shared/components/dashboard/company/company-add-edit/company-add-edit.component';
import { UserAddEditComponent } from './shared/components/dashboard/user/user-add-edit/user-add-edit.component';
import { ProfileComponent } from './shared/components/profile/profile.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',  loadChildren: () => import('./shared/components/home/home.module').then(
      module => module.HomeModule
    )
  },
  {
    path: 'register', loadChildren: () => import('./shared/components/signup/signup.module').then(
      module => module.SignupModule
    )
  },
  {
    path: 'login', loadChildren: () => import('./shared/components/login/login.module').then(
      module => module.LoginModule
    )
  },
  {
    path: 'jobs', loadChildren: () => import('./shared/components/jobs/jobs.module').then(
      module => module.JobsModule
    )
  },
  {
    path:'settings' , loadChildren: () => import('./shared/components/account/account.module').then(
      module => module.AccountModule
    )
  },
  { path: 'company', loadChildren: () => import('./shared/components/company/company.module').then(
    module => module.CompanyModule
  )
  },
  {
    path:'profile-company',loadChildren: () => import('./shared/components/profile-company/profile-company.module').then(
      module => module.ProfileCompanyModule
      )
  },
  {
    path: "superAdmin",loadChildren: () => import('./shared/components/dashboard/profile-superadmin/profile-superadmin.module').then(
      module => module.ProfileSuperadminModule
      )
  },
  {
    path: "profile", component: ProfileComponent
  },
  {
    path: "adminProfile", component: AdminProfileComponent
  },
  {
    path: "admin", component: AdminListComponent
  },
  {
    path: "addAdmin", component: AdminAddEditComponent
  },
  {
    path: 'addCompany', component: CompanyAddEditComponent
  },
  {
    path: 'addUser', component: UserAddEditComponent
  },
  { path: 'editAdmin', component: AdminAddEditComponent },
  { path: 'editAdmin/:id', component: AdminAddEditComponent },
  { path: 'editCompany/:id', component: CompanyAddEditComponent },
  { path: 'editUser/:id', component: UserAddEditComponent },
  
  {
    path:'**' ,
     loadChildren: () => import('./shared/components/bage-not-found/bage-not-found.module').then(
      module => module.BageNotFoundModule
      )
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
