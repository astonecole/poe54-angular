import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputText]'
})
export class InputTextDirective {
  e: any;

  constructor(private elem: ElementRef) {
    this.e = elem.nativeElement;

    this.e.style.border = '1px solid #333';
    this.e.style.width = '100%';
    this.e.style.paddingLeft = '5px';
  }

  @HostListener('focus') onFocus(): void {
    this.e.style.borderColor = 'orangered';
  }

  @HostListener('blur') onBlur(): void {
    this.e.style.borderColor = '#333';
  }
}
