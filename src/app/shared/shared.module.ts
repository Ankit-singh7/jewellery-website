import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ]

})
export class SharedModule { }
