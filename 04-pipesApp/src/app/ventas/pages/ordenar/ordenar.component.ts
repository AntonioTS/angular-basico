import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Robbin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Wonder Woman',
      vuela: true,
      color: Color.amarillo
    },
    {
      nombre: 'Arrow',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.blanco
    }
  ]

  constructor() { }

  cambiarMayus(){
    this.enMayusculas = !this.enMayusculas;
    // if ( this.enMayusculas ) {
    //   this.enMayusculas = false;
    // } else {
    //   this.enMayusculas = true;
    // }
  }

  cambiarOrden( valor: string ){
    this.ordenarPor = valor;
  }
  
  ngOnInit(): void {
  }

}
