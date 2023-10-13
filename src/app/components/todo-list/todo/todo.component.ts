import { Component, Input } from '@angular/core';
import { Todo } from '@models/index';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo?: Todo;

  isEditing?: boolean = false;

  onComplete(id: Todo['id']) {}

  onDelete(id: Todo['id']) {}

  onEdit(id: Todo['id']) {}

  log(input: any) {
    console.log(input.checked);
  }
}
