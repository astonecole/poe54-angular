import { Directive, ElementRef, HostListener, OnInit, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appToggleText]'
})
export class ToggleTextDirective implements OnInit, OnChanges {
  state = false;
  currentText = '';
  @Input() color = 'royalblue';
  @Input() txt = '';

  constructor(private elem: ElementRef) {
    console.log(this.color);
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('On Init...');
    console.log(this.color);

    this.currentText = this.elem.nativeElement.textContent;

    const text = this.elem.nativeElement.textContent;

    if (text !== 'Hello World' && text !== 'Bonjour tout le monde') {
      this.elem.nativeElement.style.color = 'royalblue';
    }
  }

  ngOnChanges() {
    console.log('On Changes...');
  }

  @HostListener('click') onClick(): void {
    if (this.state) {
      this.elem.nativeElement.textContent = this.currentText;
    } else {
      this.elem.nativeElement.textContent = 'Bonjour tout le monde';
    }

    this.state = !this.state;
  }

}
