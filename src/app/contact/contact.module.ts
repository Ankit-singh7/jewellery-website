import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailComponent } from './email/email.component';
import { LocateComponent } from './locate/locate.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EmailComponent, LocateComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ContactRoutingModule
  ]
})
export class ContactModule { }
