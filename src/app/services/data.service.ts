import { Injectable } from '@angular/core';
import { Todo, TodoList } from '@models/index';

import { todos } from '@mocks/todos';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todoLists: TodoList[] = JSON.parse(
    localStorage.getItem('allLists') || JSON.stringify(todos),
  );
  private _todoId = 0;

  constructor() {}

  private iterateTodosLength() {
    this.todoLists.forEach((list) => {
      this._todoId += list.todos?.length || 0;
    });
  }

  onCreateList({ name, icon }: TodoList) {
    if (!icon) icon = 'dona stroke-accent-blue-100'; // This should be passed with a default value already, shouldn't be done here.

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

  onEditList({ id, name: newListname }: TodoList) {
    try {
      if (!newListname) return;

      this.todoLists.filter((list, index) => {
        if (list.id === id) this.todoLists[index].name = newListname;
      });

      localStorage.setItem('allLists', JSON.stringify(this.todoLists));
    } catch (err) {
      console.error(err);
    }
  }

  onDeleteList(id: TodoList['id']) {
    try {
      this.todoLists.filter((list, index) => {
        if (list.id === id) this.todoLists.splice(index, 1);
      });

      localStorage.setItem('allLists', JSON.stringify(this.todoLists));
    } catch (err) {
      console.error(err);
    }
  }

  onCreateTodo(
    description: Todo['description'],
    todoListId: Todo['todoListId'],
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
    newDescription: Todo['description'],
  ) {
    try {
      if (!newDescription) return;

      let listId = this.todoLists.findIndex((list) => list.id === todoListId);
      let todoIndex = this.todoLists[listId].todos?.findIndex(
        (todo) => todo.id === id,
      );

      if (
        newDescription === this.todoLists[listId].todos![todoIndex!].description
      )
        return;

      this.todoLists[listId].todos![todoIndex!].description = newDescription;
      localStorage.setItem('allLists', JSON.stringify(this.todoLists));
    } catch (e) {
      console.error(e);
    }
  }

  onDuplicateTodo(id: Todo['id'], todoListId: Todo['todoListId']) {
    try {
      let listId = this.todoLists.findIndex((list) => list.id === todoListId);

      let todo = this.todoLists[listId].todos?.find((todo) => todo.id === id);
      let todoIndex = this.todoLists[listId].todos?.findIndex(
        (todo) => todo.id === id,
      );

      this.todoLists[listId].todos?.splice(todoIndex + 1, 0, todo);
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
        (todo) => todo.id === id,
      );

      this.todoLists[listId]?.todos?.splice(todoIndex!, 1);
      localStorage.setItem('allLists', JSON.stringify(this.todoLists));
    } catch (e) {
      console.error(e);
    }
  }
}
