import{NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent} from './componentes/banner/banner.component';
import { HomeComponent  } from './componentes/home/home.component';
import {HomeRountingModule} from './home-rounting.module';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports:[
    HomeRountingModule,
    CommonModule
  ]
})

export class HomeModule{

}
