import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlight-yellow]'
})
export class HighlightDirective {
  private element: ElementRef<HTMLDivElement> = inject(ElementRef);
  constructor() {
    console.log("Directiva highlight-yellow cargada");
    this.element.nativeElement.style.backgroundColor = 'yellow';

  }

}
