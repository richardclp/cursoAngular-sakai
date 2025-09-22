import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mi-componente09',
  imports: [],
  templateUrl: './mi-componente09.html',
  styleUrl: './mi-componente09.css'
})
export class MiComponente09 implements OnInit, OnDestroy {
  public nombre: string = '';
  public edad: number = 0;

  private _activatedRoute: any = inject(ActivatedRoute);
  private sub?: Subscription;

  ngOnInit(): void {
    this.sub = this._activatedRoute.paramMap.subscribe((params: any) => {
      this.nombre = params.get('param_nombre') ?? '';
      this.edad = Number(params.get('param_edad'));
    });

    // Obtener datos
    console.log("Obtener datos snapshot: ", this._activatedRoute.snapshot.params);

  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
