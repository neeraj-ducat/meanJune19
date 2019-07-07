import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserRoutingModule } from './user-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [UserHomeComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule {

  constructor() {
    console.log('User Module is loaded.');
  }
 }
