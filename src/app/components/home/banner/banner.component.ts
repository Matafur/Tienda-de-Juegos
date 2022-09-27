import { Component, OnInit,  } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl:'./banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  images: string []=[
    '../../../../assets/imagen/banner-1.jpg',
    '../../../../assets/imagen/banner-2.jpg',
    '../../../../assets/imagen/banner-3.jpg',
  ];


  constructor() { }

  ngOnInit(): void {
  }



}
