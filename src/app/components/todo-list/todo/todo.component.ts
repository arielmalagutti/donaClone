import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Todo } from '@models/index';

import { DataService } from '@services/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() firstChild?: boolean;
  @Input() lastChild?: boolean;
  todoInputElement!: ElementRef<HTMLInputElement>;

  @ViewChild('todoInput') set todoInput(
    listInputRef: ElementRef<HTMLInputElement>
  ) {
    if (listInputRef) {
      this.todoInputElement = listInputRef;
      this.todoInputElement.nativeElement.focus();
    }
  }

  @Input() todo!: Todo;

  isEditing?: boolean = false;

  isActionsOpen: boolean = false;

  constructor(private dataService: DataService) {}

  onComplete(isChecked: boolean) {
    try {
      this.todo.isComplete = isChecked;
    } catch (e) {
      console.error(e);
    }
  }

  onEdit(
    id: Todo['id'],
    listId: Todo['todoListId'],
    newDescription: Todo['description']
  ) {
    this.dataService.onEditTodo(id, listId, newDescription);
  }

  onDuplicate() {
    // this.dataService.onDuplicateTodo()
  }

  onDelete(id: any, listId: any) {
    this.dataService.onDeleteTodo(id, listId);
  }

  /**
   * Refactor open and close dropdown to work without setTimeout
   * when button is clicked it sets isActionsOpen = true, then it renders
   * dropdown component and directive listens to the same click of the button and disables it
   */
  openDropdown() {
    setTimeout(() => {
      this.isActionsOpen = true;
    }, 1);
  }

  closeDropdown(event: boolean) {
    this.isActionsOpen = event;
  }
}
