import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BageNotFoundComponent } from './bage-not-found.component';

const routes: Routes = [
  {
    path:'',component:BageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BageNotFoundRoutingModule { }
