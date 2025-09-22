import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  imports: [],
  //templateUrl: './saludo.html',
  //styleUrl: './saludo.css',
  template: `
  <div>
    <h2>Hola Richard!!</h2>
  </div>`,
  styles: `
    div { text-align:center; margin-top:20px; background-color:blue;}
    h2 { color:white; background-color:teal; padding:5px; border-radius:5px; }
`})

export class Saludo implements OnInit, OnDestroy {
  constructor() {
    console.log('Componente Saludo > constructor()');
  }

  ngOnInit(): void {
    console.log('Componente Saludo > ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('Componente Saludo > ngOnDestroy()');
  }
}
