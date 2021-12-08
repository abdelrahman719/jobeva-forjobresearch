import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSuperadminComponent } from './profile-superadmin.component';

const routes: Routes = [
  {
    path:'',component: ProfileSuperadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileSuperadminRoutingModule { }
