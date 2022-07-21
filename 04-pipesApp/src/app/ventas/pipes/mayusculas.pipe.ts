import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value: string, enMayusculas: boolean = true) {
  //   if ( enMayusculas ) {
  //     return value.toUpperCase();
  //   } else {
  //     return value.toLowerCase();
  //   }
  // }
    return ( enMayusculas ) ? value.toUpperCase() : value.toLowerCase();
  }
}
