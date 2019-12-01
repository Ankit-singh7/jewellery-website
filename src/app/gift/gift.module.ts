import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OfferComponent } from './offer/offer.component';
import { GiftRoutingModule } from './gift-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [OfferComponent],
  imports: [
    CommonModule,
    GiftRoutingModule,
    SharedModule,
    CarouselModule
  ],
  exports: [
    GiftRoutingModule
  ]

})
export class GiftModule { }
