import{NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent  } from './components/contact.component';
import {ContactRountingModule} from '././contact-rounting.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports:[
    ContactRountingModule,
    CommonModule
  ]
})

export class ContactModule{

}
