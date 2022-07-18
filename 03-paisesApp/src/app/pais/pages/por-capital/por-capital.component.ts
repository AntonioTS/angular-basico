import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  capital: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    
    this.paisService.buscarCapital(this.termino)
      .subscribe((resp) => {
        console.log(resp);
        this.capital = resp;

      }, (err) => {
        this.hayError = true;
        this.capital = [];
      });
  }

  sugerencias(termino: string){
    this.hayError = false;
    // Crear sugerencias
  }
}
