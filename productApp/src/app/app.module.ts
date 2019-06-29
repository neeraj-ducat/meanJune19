import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
// Import BrowserAnimationsModule
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
 
// Import your library
import { AlertModule } from 'ngx-alerts';
@NgModule({
  declarations: [
    AppComponent,
    ViewProductComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
