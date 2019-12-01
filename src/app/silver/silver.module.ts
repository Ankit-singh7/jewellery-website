import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BangleComponent } from './bangle/bangle.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { EarringComponent } from './earring/earring.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { RingComponent } from './ring/ring.component';
import { SilverRoutingModule } from './silver-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BangleComponent, BraceletComponent, EarringComponent, NecklaceComponent, RingComponent],
  imports: [
    CommonModule,
    SilverRoutingModule,
    SharedModule
  ],
  exports: [
    SilverRoutingModule
  ]
})
export class SilverModule { }
