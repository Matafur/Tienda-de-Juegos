import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  iconos :string [] = [
    '../../../../assets/imagen/telefono.png',
    '../../../../assets/imagen/correo.png',
    '../../../../assets/imagen/ubicacion.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
