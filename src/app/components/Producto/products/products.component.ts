import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product [] = [
    {
      id: '1',
      image: '../assets/imagen/Nintendo Switch.png',
      title: 'Nintendo Switch',
      price: 80000,
      description: 'Consola Nintendo'
    },
    {
      id: '2',
      image: '../assets/imagen/Play 4.png',
      title: 'Play Station 4',
      price: 180000,
      description: 'Consola Play Station 4'
    },
    {
      id: '3',
      image: '../assets/imagen/Play 5.png',
      title: 'Play Station 5',
      price: 280000,
      description: 'Consola Play Station 5'
    },
    {
      id: '4',
      image: '../assets/imagen/PSP.png',
      title: 'Consola "PSP"',
      price: 40000,
      description: 'Consola PSP'
    },
    {
      id: '5',
      image: '../assets/imagen/Xbox 360.png',
      title: 'Xbox 360',
      price: 120000,
      description: 'Consola Xbox 360'
    },
    {
      id: '6',
      image: '../assets/imagen/Xbox.png',
      title: 'Xbox One',
      price: 160000,
      description: 'Consola Xbox One'
    },
    {
      id: '7',
      image: '../assets/imagen/Bicileta.png',
      title: 'Bicicleta',
      price: 60000,
      description: 'Bicicleta'
    },
    {
      id: '8',
      image: '../assets/imagen/hoodie.png',
      title: 'Saco Hoddie',
      price: 6000,
      description: 'Saco gamer'
    },
    {
      id: '9',
      image: '../assets/imagen/camiseta.png',
      title: 'Camiseta',
      price: 65000,
      description: 'Camiseta'
    },
    {
      id: '10',
      image: '../assets/imagen/mug.png',
      title: 'Mug',
      price: 5000,
      description: 'Mug'
    },
];

  constructor() {}

  ngOnInit() {}

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}
