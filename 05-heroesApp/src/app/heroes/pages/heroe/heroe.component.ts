import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;
  

  constructor( private activatedRoute: ActivatedRoute, private heroeService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroeService.getHeroePorId( id ) )
    )
    .subscribe( heroe => this.heroe = heroe)
    // id del heroe y mostrarlo en consola
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

}
