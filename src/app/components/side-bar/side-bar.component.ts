import { Component } from '@angular/core';
import { TodoList } from '@models/index';

import { todos } from '@mocks/todos';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  todoLists: TodoList[] = todos;
  newList?: TodoList;

  isEditing: boolean = false;
  createNewList() {
    this.isEditing = true;
  }

  handleNewList(inputValue: string) {
    this.newList = {
      id: String(this.todoLists.length + 1),
      name: inputValue,
      todos: [],
    };
    try {
      if (!this.newList) throw new Error('Object is empty!');
      this.todoLists.push(this.newList);
    } catch (e) {
      console.log(e);
    }
  }

  onBlur() {
    this.isEditing = false;
  }

  onEdit() {}

  onDelete() {}

  onRemoveAllTodos() {}
}
