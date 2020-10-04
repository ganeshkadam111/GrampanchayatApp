import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './core/guard/auth.guard';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/search', pathMatch: 'full' },
  { path: 'home', redirectTo: 'home/search', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: 'dashboard/requests', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module')
          .then(mod => mod.HomeModule)
      }]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module')
          .then(mod => mod.AuthModule)
      }]
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module')
          .then(mod => mod.DashboardModule)
      }]
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
