import { CardModule } from 'primeng/card';
import { MiComponente01 } from './../mi-componente01/mi-componente01';
import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mi-componente02',
  imports: [CardModule],
  templateUrl: './mi-componente02.html',
  styleUrl: './mi-componente02.css'
})
export class MiComponente02 implements OnChanges, OnInit, DoCheck, OnDestroy {
  public titulo;
  public nombre: string;
  public edad: number;
  public esCasado: boolean;
  public fechaNac: Date;
  public comodin: any;
  public frutas: Array<string>;

  constructor() {
    console.log(" MiComponente02 --> constructor() ");

    this.titulo = "Mi Componente 02";
    this.nombre = "Richard Carlos Lopez Paca";
    this.edad = 30;
    this.esCasado = false;
    this.fechaNac = new Date(1993, 6, 15);//15 de julio de 1993
    this.comodin = 100;
    this.frutas = ['Limon', 'Naranja', 'Manzana', 'Pera'];
  }
  //Eventos del ciclo de vida del componente
  ngOnChanges(changes: SimpleChanges): void {
    console.log(" MiComponente02 --> ngOnChanges() ");
    // Obtener datos de componentes padre hijo
  }
  ngOnInit(): void {
    console.log(" MiComponente02 --> ngOnInit() ");
    //Obtener  datos desde un API
  }
  ngDoCheck(): void {
    console.log(" MiComponente02 --> ngDoCheck() ");
    //Detectar cambios en los objetos
  }
  ngOnDestroy(): void {
    console.log(" MiComponente02 --> ngOnDestroy() ");
    //Eliminar observables o listeners
  }

  //Otras funciones


}
