import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  exports: [
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
