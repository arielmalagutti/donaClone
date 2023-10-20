import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.css'],
})
export class IconPickerComponent {
  isIconPickerOpen: boolean = false;

  availableColors: string[] = [
    'bg-accent-blue',
    'bg-accent-red',
    'bg-accent-green',
    'bg-accent-grey',
    'bg-accent-purple',
    'bg-accent-yellow',
  ];

  toggleIconPicker() {
    this.isIconPickerOpen = !this.isIconPickerOpen;
  }
}
