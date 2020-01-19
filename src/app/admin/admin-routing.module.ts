import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferViewComponent } from './offer-view/offer-view.component';
import { OfferListComponent } from './offer-list/offer-list.component';

const routes: Routes = [
  {path: 'offer-view/:offerId', component: OfferViewComponent},
  {path: 'offer-list', component: OfferListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
