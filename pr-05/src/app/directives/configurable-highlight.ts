import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[configurableHighlight]',
  standalone: true
})
export class ConfigurableHighlightDirective {
  @Input('highlightColor') highlightColor: string = 'yellow';

  private originalBg: string = '';

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.originalBg = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.originalBg;
  }
}
