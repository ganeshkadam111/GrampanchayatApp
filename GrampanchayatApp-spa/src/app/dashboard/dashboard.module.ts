import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../module/material.module';
import { CoreModule } from '../core/core.module';
import { ApplicationRequestComponent } from './application-request/application-request.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ApplicationRequestComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    CoreModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
