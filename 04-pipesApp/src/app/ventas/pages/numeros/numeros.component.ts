import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent  {


  ventasNeta: number = 2567789.5567;
  porcentaje: number = 0.4856;

  constructor() { }

}
