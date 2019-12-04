import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { MarketRateComponent } from './market-rate/market-rate.component';

const routes: Routes = [
    {path: 'market-rate', component: MarketRateComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RateRoutingModule {}
