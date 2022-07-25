import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroe: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor( private heroesServices: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesServices.getSugerencias( this.termino.trim() )
      .subscribe( heroes => this.heroe = heroes);
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if (!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesServices.getHeroePorId( heroe.id! )
      .subscribe( heroes => this.heroeSeleccionado = heroes)
  }
}
