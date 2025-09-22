import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mi-componenete05-hijo',
  imports: [],
  template: `
  <div style="background: #ca9df5ff; padding: 20px">
    <h3>Datos del Componente Hijo</h3>
    <p>Nombre: {{ nombre }}</p>
    <p>Edad: {{ edad }}</p>
    <p>Activo: {{ esActivo ? 'Si' : 'No' }}</p>
  </div>
  `,
  styleUrl: './mi-componenete05-hijo.css'
})
export class MiComponenete05Hijo {
  //Propiedades que reciben datos del componente padre
  @Input() nombre: string = '';
  @Input() edad: number = 0;
  @Input() esActivo: boolean = false;
}
