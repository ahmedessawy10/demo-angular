import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLightbox]'
})
export class LightboxDirective {

  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.border = '3px solid red';
  }
  @HostListener('mouseout') mouseout() {
    this.elemRef.nativeElement.style.border = "2px solid blue"

  }
  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.border = "2px solid green"
  }

}
