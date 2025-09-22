import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import localeEsBo from '@angular/common/locales/es-BO';
import { AgePipe } from '../../../pipes/age-pipe';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';

registerLocaleData(localeEsBo);

@Component({
  selector: 'app-mi-componente04',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    TableModule,
    TagModule,
    PanelModule,
    AgePipe],
  providers: [{ provide: LOCALE_ID, useValue: 'es-BO' }],
  templateUrl: './mi-componente04.html',
  styleUrl: './mi-componente04.css',
})
export class MiComponente04 {
  nombreCompleto = 'Richard Carlos Lopez Paca';
  sueldo = 46665.46;
  avancePorcentaje = 0.75;
  domicilio = { zona: 'Ticti Sud', calle: 'Eloida Valdivia', nro: 999 };
  myDate = new Date();
  myBirDate = new Date(1984, 1, 29);

  pipeExamples = [
    { pipe: 'UpperCase', value: this.nombreCompleto, result: this.nombreCompleto.toUpperCase() },
    { pipe: 'LowerCase', value: this.nombreCompleto, result: this.nombreCompleto.toLowerCase() },
    { pipe: 'Slice (8:)', value: this.nombreCompleto, result: this.nombreCompleto.slice(8) },
    { pipe: 'Slice (8:14)', value: this.nombreCompleto, result: this.nombreCompleto.slice(8, 14) },
    { pipe: 'Number', value: this.sueldo.toString(), result: this.sueldo.toFixed(2) },
    { pipe: 'Currency', value: this.sueldo.toString(), result: 'BOB ' + this.sueldo.toFixed(2) },
    { pipe: 'Percent', value: this.avancePorcentaje.toString(), result: (this.avancePorcentaje * 100).toFixed(2) + '%' },
    { pipe: 'Date', value: this.myDate.toString(), result: this.myDate.toLocaleDateString() }
  ];

  miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llego la data de la promesa');
    }, 3500);
  });
}
