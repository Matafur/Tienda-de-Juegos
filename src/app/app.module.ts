import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {ProductComponent} from './components/Producto/product/product.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './components/Producto/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import {SharedModule} from './shared/shared.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/Producto/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ProductsComponent,
    ContactComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule,SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
