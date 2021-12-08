import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { FiltterjobsPipe } from '../../pipe/filtterjobs.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JobsComponent,
    FiltterjobsPipe
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    FormsModule
    
  ]
})
export class JobsModule { }
