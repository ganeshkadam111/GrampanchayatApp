import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationRequestComponent } from './application-request/application-request.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'requests',
        component: ApplicationRequestComponent
      },
      {
        path: 'calculator',
        component: CalculatorComponent
      }
    ]
  }
  // {
  // path: 'dashboard',
  // component: DashboardComponent
  // }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
