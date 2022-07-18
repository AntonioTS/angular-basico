import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interfaces';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activateRoute: ActivatedRoute, private paisServide: PaisService) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisServide.getPaisPorAlpha( id )),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais )
    // this.activateRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log( id );

    //     this.paisServide.getPaisPorAlpha(id)
    //     .subscribe(pais => {
    //       console.log(pais);
    //     })
    //   })
  }

}
