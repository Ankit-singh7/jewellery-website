import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home/dashboard', pathMatch: 'full'},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'collection', loadChildren: './collection/collection.module#CollectionModule'},
  {path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
  {path: 'gift', loadChildren: './gift/gift.module#GiftModule'},
  {path: 'silver', loadChildren: './silver/silver.module#SilverModule'},
  {path: 'rate', loadChildren: './rate/rate.module#RateModule'},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
