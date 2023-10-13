import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions-dropdown',
  templateUrl: './actions-dropdown.component.html',
  styleUrls: ['./actions-dropdown.component.css'],
})
export class ActionsDropdownComponent {
  @Output() onEdit = new EventEmitter();
  @Output() onDuplicate = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() {}

  handleEdit() {
    this.onEdit.emit();
  }

  handleDuplicate() {
    this.onDuplicate.emit();
  }

  handleDelete() {
    this.onDelete.emit();
  }
}
