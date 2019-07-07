import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminHomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { 
  constructor() {
    console.log('Admin Module is loaded.');
  }
}
