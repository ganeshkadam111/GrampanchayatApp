import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../module/material.module';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import { SearchComponent } from './search/search.component';
import { ApplyComponent } from './apply/apply.component';


@NgModule({
  declarations: [HomeComponent, SearchComponent, ApplyComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    CoreModule
  ]
})
export class HomeModule { }
