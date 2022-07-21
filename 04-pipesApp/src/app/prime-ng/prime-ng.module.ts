import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    ToolbarModule,
    TableModule,
    MenubarModule,
    FieldsetModule  
  ]
})
export class PrimeNgModule { }
