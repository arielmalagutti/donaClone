import { Injectable } from '@angular/core';
import { Todo, TodoList } from '@models/index';

import { todos } from '@mocks/todos';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todoLists: TodoList[] = JSON.parse(
    localStorage.getItem('allLists') || JSON.stringify(todos)
  );
  private _todoId = 0;

  constructor() {}

  private iterateTodosLength() {
    this.todoLists.forEach((list) => {
      this._todoId += list.todos?.length || 0;
    });
  }

  onCreateList({ name, icon }: TodoList) {
    try {
      this.todoLists.push({
        id: String(this.todoLists.length + 1),
        name,
        icon,
        todos: [],
      });

      localStorage.setItem('allLists', JSON.stringify(this.todoLists));
    } catch (e) {
      console.error(e);
    }
  }

  onEditList() {}

  onDeleteList() {}

  onCreateTodo(
    description: Todo['description'],
    todoListId: Todo['todoListId']
  ) {
    this.iterateTodosLength();

    try {
      if (!description) throw new Error('Todo description is missing!');

      this.todoLists[0].todos?.push({
        id: String(this._todoId),
        todoListId,

        isComplete: false,
        description,

        createdAt: String(new Date()),
        completedAt: null,
      });

      localStorage.setItem('allLists', JSON.stringify(this.todoLists));
    } catch (e) {
      console.log(e);
    }
  }

  onEditTodo() {}

  onDeleteTodo() {}
}
