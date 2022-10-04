import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';

import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';


import {SharedModule} from './shared/shared.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { LayoutComponent } from './components/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PageNotFoundComponent,
    LayoutComponent,


  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule,SharedModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
