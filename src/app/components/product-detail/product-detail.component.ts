import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/product.model';
import {ProductComponent} from '../../components/product.component';
import { ComprarService } from 'src/app/comprar.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  mario: string []=[
    '../../../assets/imagen/mario.png',
  ];

  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  product: Product;


  addCart(){
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private comprarService : ComprarService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id= params['id'];
      this.product = this.productsService.getProduct(id)!;

    });



  }

}


