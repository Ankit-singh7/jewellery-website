import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BangleComponent } from './bangle/bangle.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { EarringComponent } from './earring/earring.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { RingComponent } from './ring/ring.component';


const routes: Routes = [
    {path: 'bangle', component: BangleComponent},
    {path: 'bracelet', component: BraceletComponent},
    {path: 'earring', component: EarringComponent},
    {path: 'necklace', component: NecklaceComponent},
    {path: 'ring', component: RingComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SilverRoutingModule {}
