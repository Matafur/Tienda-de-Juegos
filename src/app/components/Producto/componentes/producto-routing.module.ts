import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductsComponent} from '../componentes/products/products.component';
import {ProductDetailComponent} from '../componentes/product-detail/product-detail.component';


const routes: Routes =[
  {
    path: '',
    component:ProductsComponent
  },
  {
    path: ':id',
    component:ProductDetailComponent,
  }




]

@NgModule({
  imports: [ RouterModule.forChild(routes),
  ],
  exports:[ RouterModule]

})
export class ProductoRountingModule {

}
