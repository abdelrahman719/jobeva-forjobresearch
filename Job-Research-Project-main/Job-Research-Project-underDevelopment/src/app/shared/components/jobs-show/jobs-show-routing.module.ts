import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsShowComponent } from './jobs-show.component';

const routes: Routes = [
  {
    path:'',component:JobsShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsShowRoutingModule { }
