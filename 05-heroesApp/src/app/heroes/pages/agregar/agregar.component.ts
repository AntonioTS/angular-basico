import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publisher = [
    {
      id: 'DC Comics',
      desc: "DC - Comics"
    },
    {
      id: 'Marvel Comics',
      desc: "Marvel - Comics"
    }
  ]

  heroe: Heroe = {
    publisher: Publisher.DCComics,
    superhero: '',
    alter_ego: '',
    alt_img: '',
    characters: '',
    first_appearance: ''
  }

  constructor( private heroService: HeroesService ) { }

  ngOnInit(): void {
  }
  
  guardar(){
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    this.heroService.agregarHeroe( this.heroe )
      .subscribe( resp => console.log('Respuesta ', resp))


  }

}
