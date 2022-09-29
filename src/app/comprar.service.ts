import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ComprarService {

  @Input() product: Product ;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart(){
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}

