import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketRateComponent } from './market-rate/market-rate.component';
import { RateRoutingModule } from './rate-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MarketRateComponent],
  imports: [
    CommonModule,
    RateRoutingModule,
    SharedModule
  ],
  exports: [
    RateRoutingModule
  ]
})
export class RateModule { }
