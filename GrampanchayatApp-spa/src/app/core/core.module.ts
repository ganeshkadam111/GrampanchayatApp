import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../module/material.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [ContentComponent, HeaderComponent, FooterComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class CoreModule { }
