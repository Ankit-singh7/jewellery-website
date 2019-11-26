import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home/dashboard', pathMatch: 'full'},
  {path: 'home', loadChildren: './home-page/home-page.module#HomePageModule'},
  {path: 'collection', loadChildren: './collection/collection.module#CollectionModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
