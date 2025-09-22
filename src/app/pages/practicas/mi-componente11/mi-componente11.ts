import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-mi-componente11',
  imports: [],
  templateUrl: './mi-componente11.html',
  styleUrl: './mi-componente11.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiComponente11 {
  //titulo = "Espere 3 segundos ...";
  titulo = signal('Espere 3 segundos ...');
  contador = signal(0);
  multiplicarPorTres = computed(() => this.contador() * 3);
  //effect
  //toSignal(observable)

  //constructor(private cdr: ChangeDetectorRef) {
  constructor() {
    setTimeout(() => {
      this.titulo.set('Curso de Angular');
      console.log("Se a enviado el valor de titulo");
      //cdr.markForCheck();//Forzar actualizar plantilla
    }, 3000);
  }

  incrementarConSet(): void {
    this.contador.set(this.contador() + 1);
  }

  incrementarConUpdate(): void {
    this.contador.update((valor) => { return valor + 1 });
  }
}
