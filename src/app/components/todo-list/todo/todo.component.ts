import { Component, Input } from '@angular/core';
import { Todo } from '@models/index';

import { DataService } from '@services/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo!: Todo;

  isEditing?: boolean = false;

  constructor(private dataService: DataService) {}

  onComplete(isChecked: boolean) {
    try {
      this.todo.isComplete = isChecked;
    } catch (e) {
      console.error(e);
    }
  }
}
