import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
//https://github.com/fhmontes123/cursoangular
@Component({
    selector: 'app-mi-componente01',
    imports: [FormsModule, ButtonModule, InputTextModule],
    templateUrl: './mi-componente01.html',
    styleUrl: './mi-componente01.css'
})
export class MiComponente01 {
    public titulo = 'Mi Componente 01';
    public nombre = 'Richard Carlos Lopez Paca';
    public deshabilitar = true;
    public inputMessage = '';
    public inputNombre = '';

    constructor() {
        setTimeout(() => {
            this.deshabilitar = false;
        }, 5000);//5 segundos de espera
    }

    clickSaludar(): void {
        console.log("Saludando a " + this.nombre);

    }

    eventoInput(event: Event): void {
        const inputEvent = event as InputEvent;
        console.log("Evento input ..", inputEvent.data);
        this.inputMessage += inputEvent.data;
    }
}
