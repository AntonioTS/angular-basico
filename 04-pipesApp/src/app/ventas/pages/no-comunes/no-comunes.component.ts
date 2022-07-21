import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit{

  // i18nSelect
  nombre: string = 'Antonio';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  cliente: string[] = ['pedro', 'julio', 'samuel', 'Bernardor', 'Pepe', 'Ivan'];
  clienteMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }

  persona = {
    direccion: 'Camino al silo',
    numero: 33,
    poblacion: 'Villamartin, Cadiz',
    nombre: this.nombre
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  constructor(private primengConfig: PrimeNGConfig) {  }

  cambiarNombre() {
    this.nombre = 'Manuela';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.cliente.pop();
    console.log(this.cliente);
  }

  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')   
    }, 3500);
  })


  ngOnInit() {
    this.primengConfig.ripple = true;
  }


}
