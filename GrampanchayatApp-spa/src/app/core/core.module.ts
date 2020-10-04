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
import { OnlyNumberDirective } from './directives/only-number.directive';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent,
    PageNotFoundComponent, 
    HeaderWithLoginComponent, 
    HeaderWithoutLoginComponent, 
    OnlyNumberDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderComponent, 
    FooterComponent,
    PageNotFoundComponent, 
    HeaderWithLoginComponent, 
    HeaderWithoutLoginComponent,
    OnlyNumberDirective
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
