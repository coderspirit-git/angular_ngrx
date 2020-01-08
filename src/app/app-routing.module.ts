import { DisplayComponent } from './display/display.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '' , redirectTo: '/addcontact', pathMatch: 'full'},
  {path:'addcontact', component:ContactComponent},
  {path:'display',component:DisplayComponent},
  {path:'addcontact/:edit', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
