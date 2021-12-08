import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BageNotFoundRoutingModule } from './bage-not-found-routing.module';
import { BageNotFoundComponent } from './bage-not-found.component';


@NgModule({
  declarations: [
    BageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BageNotFoundRoutingModule
  ]
})
export class BageNotFoundModule { }
