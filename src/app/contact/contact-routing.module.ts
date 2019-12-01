import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { EmailComponent } from './email/email.component';
import { LocateComponent } from './locate/locate.component';

const routes: Routes = [
    {path: 'email', component: EmailComponent},
    {path: 'locate', component: LocateComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContactRoutingModule {}
