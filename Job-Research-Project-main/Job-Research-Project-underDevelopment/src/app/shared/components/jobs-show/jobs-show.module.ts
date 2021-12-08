import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsShowRoutingModule } from './jobs-show-routing.module';
import { JobsShowComponent } from './jobs-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JobsShowComponent
  ],
  imports: [
    CommonModule,
    JobsShowRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JobsShowModule { }
