import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {


  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
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
}
