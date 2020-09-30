import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../module/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderWithLoginComponent } from './components/header-with-login/header-with-login.component';
import { HeaderWithoutLoginComponent } from './components/header-without-login/header-without-login.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent,
    PageNotFoundComponent, 
    HeaderWithLoginComponent, 
    HeaderWithoutLoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    PageNotFoundComponent, 
    HeaderWithLoginComponent, 
    HeaderWithoutLoginComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
