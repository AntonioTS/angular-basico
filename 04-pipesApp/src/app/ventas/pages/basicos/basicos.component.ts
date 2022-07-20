import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'antonio';
  nombreUpper: string = 'Antonio';
  nombreCorrecto: string = 'anTonio toRREñO';

  fecha: Date = new Date();

}
