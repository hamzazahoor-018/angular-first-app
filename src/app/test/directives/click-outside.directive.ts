import { Directive, ElementRef, EventEmitter, HostListener, Output, inject } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  private readonly elementRef = inject(ElementRef) as ElementRef<HTMLElement>;

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: EventTarget | null) {
    if (!target) return;
    if (!(target instanceof HTMLElement)) return;
    if (!this.elementRef.nativeElement.contains(target)) {
      this.clickOutside.emit();
    }
  }
}
