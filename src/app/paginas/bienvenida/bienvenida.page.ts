import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  constructor() { }
  
  swiperSlideChange (e: any){
    console.log('changed: ', e)
  }
  comenzar() {
    console.log('Botón Comenzar clickeado');}

  ngOnInit() {
  }

}
