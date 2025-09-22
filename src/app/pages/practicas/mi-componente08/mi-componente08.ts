import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider'; // ← Agregar esta importación

@Component({
    selector: 'app-mi-componente08',
    imports: [
        RouterLink,
        CardModule,
        ButtonModule,
        PanelModule,
        TagModule,
        DividerModule // ← Agregar esta importación
    ],
    templateUrl: './mi-componente08.html',
    styleUrl: './mi-componente08.css'
})
export class MiComponente08 {
    private readonly _router = inject(Router);

    navigateToComponente01(): void {
        this._router.navigate(['/dashboard/practicas/micomponente01']);
    }

    navigateToComponente02(): void {
        this._router.navigateByUrl('/dashboard/practicas/micomponente02');
    }

    redirectToComponente09(): void {
        this._router.navigate(['/dashboard/practicas/micomponente09', 'Javier', 45], {
            queryParams: { nombre: 'LoPac', edad: 44 }
        });
    }

    redirectToComponente10(): void {
        this._router.navigate(['/dashboard/practicas/micomponente10'], {
            queryParams: { param_nombre: 'LoPac', param_edad: 44 }
        });
    }
}
