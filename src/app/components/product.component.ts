import{Component, Input, Output, EventEmitter} from '@angular/core'
import {Product} from '../product.model'
import {ProductDetailComponent} from './product-detail/product-detail.component'

@Component({
  selector:'app-product',
  templateUrl: './product.component.html',
  styleUrls:['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product ;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart(){
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}
