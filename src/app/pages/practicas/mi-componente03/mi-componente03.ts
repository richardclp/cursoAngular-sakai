import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Saludo } from '../saludo/saludo';
import { Tarea } from '../../../models/tarea.model';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-mi-componente03',
    imports: [
        CommonModule,
        FormsModule,
        CardModule,
        ButtonModule,
        TagModule,
        TableModule,
        Saludo], // <-  ngClass / ngStyle
    templateUrl: './mi-componente03.html',
    styleUrl: './mi-componente03.css',
})
export default class MiComponente03 implements OnInit {
    isActive = false;
    hasError = false;
    status = 'PENDING';

    textColor = 'black';
    fontSize = 16;
    bgColor = '#f0f0f0';
    paddingSize = 10;

    score = 25;

    tareaArray: Tarea[] = [];

    ngOnInit(): void {
        this.tareaArray = [
            {
                id: 1,
                nombre: 'Aprender HTML',
                estado: true,
                prioridad: 'media',
                fechaVencimiento: new Date(),
            },
            {
                id: 2,
                nombre: 'Aprender CSS',
                estado: false,
                prioridad: 'baja',
                fechaVencimiento: new Date(),
            },
            {
                id: 3,
                nombre: 'Aprender JavaScript',
                estado: true,
                prioridad: 'alta',
                fechaVencimiento: new Date(),
            },
            {
                id: 4,
                nombre: 'Aprender TypeScript',
                estado: true,
                prioridad: 'alta',
                fechaVencimiento: new Date(),
            },
            {
                id: 5,
                nombre: 'Aprender Angular',
                estado: true,
                prioridad: 'alta',
                fechaVencimiento: new Date(),
            },
        ];
    }

    toggleActive() {
        this.isActive = !this.isActive;
    }

    toggleError() {
        this.hasError = !this.hasError;
    }

    toggleStatus() {
        if (this.status !== 'COMPLETED') {
            this.status = 'COMPLETED';
        } else {
            this.status = 'PENDING';
        }
    }

    changeColor(color: string): void {
        this.textColor = color;
    }

    increaseSize() {
        this.fontSize += 2;
    }

    getSeverity(estado: string): string {
        switch (estado) {
            case 'COMPLETED': return 'success';
            case 'PENDING': return 'warning';
            case 'CANCELLED': return 'danger';
            default: return 'info';
        }
    }
}
