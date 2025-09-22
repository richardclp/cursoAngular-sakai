import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mi-componenete06-hijo',
  imports: [],
  template: `
  <div style="background: #faf9afff; padding:20px">
    <h3>Componente hijo</h3>
    <button (click)="enviarSaludo()">Saludar al padre</button>
    <button (click)="enviarDespedida()">Despedirse del padre</button>
  </div>
  `,
  styleUrl: './mi-componenete06-hijo.css'
})
export class MiComponenete06Hijo {
  @Output() saludo = new EventEmitter<string>();
  @Output() despedida = new EventEmitter<string>();

  enviarSaludo() {
    this.saludo.emit('Hola desde el componente hijo');
  }
  enviarDespedida() {
    this.despedida.emit('Adiós desde el componente hijo');
  }
}
