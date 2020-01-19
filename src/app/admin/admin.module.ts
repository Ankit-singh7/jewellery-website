import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { OfferViewComponent } from './offer-view/offer-view.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { HelperService } from '../helper.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OfferViewComponent, OfferListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports: [
    AdminRoutingModule
  ],
  providers: [HelperService]
})
export class AdminModule { }
