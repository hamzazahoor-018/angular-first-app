import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() highlightColor = '#fef08a';

  @HostBinding('style.backgroundColor') 
  backgroundColor = 'transparent';
  
  @HostBinding('style.borderColor') 
  borderColor = 'transparent';
  
  @HostBinding('style.transform')
  transform = 'scale(1)';
  
  @HostBinding('style.transition')
  transition = 'all 150ms ease-in-out';
  
  @HostBinding('style.cursor')
  cursor = 'pointer';

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.backgroundColor = this.highlightColor;
    this.borderColor = this.highlightColor;
    this.transform = 'scale(1.02)';
    this.elementRef.nativeElement.style.boxShadow = '0 10px 24px rgba(15, 23, 42, 0.15)';
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.backgroundColor = 'transparent';
    this.borderColor = 'transparent';
    this.transform = 'scale(1)';
    this.elementRef.nativeElement.style.boxShadow = 'none';
  }
}