import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @Output() dropdownVisible: EventEmitter<boolean> = new EventEmitter();

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOutsideDropdown(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.dropdownVisible.emit(false);
    }
  }
}
