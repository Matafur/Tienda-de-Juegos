import { Component, OnInit, AfterViewInit  } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit  {

    //items = ['Cindy','Miguel','Juliana','Melany']

    mySwiper: Swiper;

  constructor() { }


  ngOnInit(): void {
  }
  ngAfterViewInit(){

    this.mySwiper = new Swiper(".swiper-container");

  }

}
