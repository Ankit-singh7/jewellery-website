import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BangleComponent } from './bangle/bangle.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { RingComponent } from './ring/ring.component';
import { EarringComponent } from './earring/earring.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { CollectionRoutingModule } from './collection-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BangleComponent, NecklaceComponent, RingComponent, EarringComponent, BraceletComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    SharedModule
  ],
  exports: [
    CollectionRoutingModule
  ]
})
export class CollectionModule { }
