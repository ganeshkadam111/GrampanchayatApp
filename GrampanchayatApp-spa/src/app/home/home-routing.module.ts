import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  // {
  //   path: 'home/search',
  //   component: HomeComponent
  // },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'apply',
        component: ApplyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
