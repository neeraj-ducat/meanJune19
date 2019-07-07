import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'user-home', pathMatch: 'full'},
  {path: 'user-home', component: UserHomeComponent,
  children: [
    {path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
