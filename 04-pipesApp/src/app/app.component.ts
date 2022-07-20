import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'AntOnio toRReño';
  numero: number = 1000;
  elemento: Object = {
    nombre: "Joaquin"
  }


  mostrarNombre(){
    console.log( this.nombre );
    console.log( this.numero );
    console.log( this.elemento );
  }
}
