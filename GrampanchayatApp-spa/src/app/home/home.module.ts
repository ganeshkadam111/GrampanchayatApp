import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../module/material.module';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    CoreModule
  ]
})
export class HomeModule { }
