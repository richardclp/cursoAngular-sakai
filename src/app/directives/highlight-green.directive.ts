import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight-green]'
})
export class HighlightGreenDirective {
  private element: ElementRef<HTMLDivElement> = inject(ElementRef);

  constructor(private renderer: Renderer2) {
    console.log("Directiva highlight-green cargada");
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
  }
}
