import{NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from '../componentes/products/products.component';
import {ProductDetailComponent} from '../componentes/product-detail/product-detail.component';
import {ProductComponent} from '../componentes/product/product.component';

import {ProductoRountingModule} from './producto-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductComponent
  ],
  imports:[
    ProductoRountingModule,
    CommonModule
  ]
})

export class ProductoModule{

}
