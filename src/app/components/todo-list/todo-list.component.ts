import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo, TodoList } from '@models/index';

import { DataService } from '@services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  listId: string = 'home';
  todoList?: TodoList;

  isCreatingTodo: boolean = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.listId = params['listId'] || '';
      this.todoList = this.dataService.todoLists.find(
        (list) => list.id === this.listId
      );
    });
  }

  onCreateTodo(input: HTMLInputElement) {
    let description = input.value;

    this.dataService.onCreateTodo(description, this.listId);
    input.value = '';
  }

  onBlur(input: HTMLInputElement) {
    if (!input.value) {
      input.value = '';
      this.isCreatingTodo = false;
    }
  }

  drop(event: CdkDragDrop<Todo[]>) {
    const reverseTodoIndex = this.todoList!.todos!.length - 1;

    moveItemInArray(
      this.todoList!.todos!,
      reverseTodoIndex - event.previousIndex,
      reverseTodoIndex - event.currentIndex
    );
  }
}
