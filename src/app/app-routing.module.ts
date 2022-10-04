import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/Producto/componentes/products/products.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/Producto/componentes/product-detail/product-detail.component';
import {LayoutComponent} from './components/layout/layout.component'

const routes: Routes = [
  {
    path: '',
    component:LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import ('././components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import ('././components/Producto/componentes/producto.module').then(m => m.ProductoModule)


      },

      {
        path: 'contact',
        loadChildren: () => import ('././components/contact/contact.module').then(m => m.ContactModule)
      },
    ]

  },

  {
    path: '**',
    component: PageNotFoundComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
