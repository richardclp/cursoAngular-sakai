import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight-hover]'
})
export class HighlightHoverDirective {
  private element: ElementRef<HTMLDivElement> = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);

  constructor() {
    console.log("Directiva highlight-hover cargada");
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.element.nativeElement, 'backgroundColor');
  }

}
