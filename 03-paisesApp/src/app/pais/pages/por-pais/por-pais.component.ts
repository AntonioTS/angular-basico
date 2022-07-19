import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor:pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisSugerido: Country[] = [];
  mostrarSugeridos: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugeridos = false;
    console.log(this.termino);
    
    this.paisService.buscarPais(this.termino)
      .subscribe((resp) => {
        console.log(resp);
        this.paises = resp;

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string){
    this.mostrarSugeridos = true;
    this.termino = termino;
    this.hayError = false;
    // Crear sugerencias
    this.paisService.buscarPais( termino )
      .subscribe( pais => this.paisSugerido = pais.splice(0,5));
  }
}
