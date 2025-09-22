import { Component } from '@angular/core';
import { MiComponenete05Hijo } from '../mi-componenete05-hijo/mi-componenete05-hijo';
import { Usuario } from '../../../models/usuario.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-componenete05-padre',
  imports: [CommonModule, MiComponenete05Hijo],
  template: `
  <div style="background: #beeefd; padding: 20px">
    <h2>Componente Padre</h2>
    <p>{{usuario|json}}</p>
    <app-mi-componenete05-hijo
      [nombre]="usuario.nombre"
      [edad]="usuario.edad"
      [esActivo]="usuario.esActivo"
    ></app-mi-componenete05-hijo>
  </div>
  `,
  styleUrl: './mi-componenete05-padre.css'
})
export class MiComponenete05Padre {
  usuario: Usuario;

  constructor() {
    this.usuario = {
      nombre: 'Richard Carlos Lopez Paca',
      edad: 39,
      esActivo: true
    };
  }

}
