import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dona-svg',
  templateUrl: './dona-svg.component.html',
  styleUrls: ['./dona-svg.component.css'],
})
export class DonaSvgComponent {
  @Input() twClasses?: string;
}
