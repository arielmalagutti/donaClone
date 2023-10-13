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

      let listId = this.todoLists.findIndex((list) => list.id === todoListId);

      this.todoLists[listId]?.todos?.push({
        id: String(this._todoId),
        todoListId,

        isComplete: false,
        description,

        createdAt: String(new Date()),
        completedAt: null,
      });

      localStorage.setItem('allLists', JSON.stringify(this.todoLists));
    } catch (e) {
      console.error(e);
    }
  }

  onEditTodo(
    id: Todo['id'],
    todoListId: Todo['todoListId'],
    newDescription: Todo['description']
  ) {
    try {
      if (!newDescription) throw new Error('Todo description is missing!');

      let listId = this.todoLists.findIndex((list) => list.id === todoListId);
      let todoIndex = this.todoLists[listId].todos?.findIndex(
        (todo) => todo.id === id
      );

      this.todoLists[listId].todos![todoIndex!].description = newDescription;
      localStorage.setItem('allLists', JSON.stringify(this.todoLists));
    } catch (e) {
      console.error(e);
    }
  }

  onDeleteTodo(id: Todo['id'], todoListId: Todo['todoListId']) {
    try {
      if (!id) throw new Error('Todo description is missing!');

      let listId = this.todoLists.findIndex((list) => list.id === todoListId);
      let todoIndex = this.todoLists[listId].todos?.findIndex(
        (todo) => todo.id === id
      );

      this.todoLists[listId]?.todos?.splice(todoIndex!, 1);
      localStorage.setItem('allLists', JSON.stringify(this.todoLists));
    } catch (e) {
      console.error(e);
    }
  }
}
