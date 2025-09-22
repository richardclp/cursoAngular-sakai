import { Component } from '@angular/core';
import { MiComponenete06Hijo } from "../mi-componenete06-hijo/mi-componenete06-hijo";

@Component({
  selector: 'app-mi-componenete06-padre',
  imports: [MiComponenete06Hijo],
  template: `
  <div style="background: #beeefd; padding: 20px">
    <h2>Componente Padre</h2>
    <p>Mensaje recibido: {{mensaje}}</p>
    <app-mi-componenete06-hijo
      (saludo)="recibirSaludo($event)"
      (despedida)="recibirDespedida($event)"
    ></app-mi-componenete06-hijo>
  </div>
  `,
  styleUrl: './mi-componenete06-padre.css'
})
export class MiComponenete06Padre {
  mensaje: string = '';

  recibirSaludo(mensaje: string) {
    this.mensaje = mensaje;
    console.log("Padre recibió saludo: " + this.mensaje);
  }
  recibirDespedida(mensaje: string) {
    this.mensaje = mensaje;
    console.log("Padre recibió despedida: " + this.mensaje);
  }
}
