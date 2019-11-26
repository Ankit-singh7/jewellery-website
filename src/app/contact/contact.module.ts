import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email/email.component';
import { LocateComponent } from './locate/locate.component';

@NgModule({
  declarations: [EmailComponent, LocateComponent],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
