import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoList } from '@models/index';

import { DataService } from '@services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() prop?: any;
  listId: string | null = 'home';
  todoList?: TodoList;

  isCreatingTodo: boolean = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.listId = params['listId'];
      this.todoList = this.dataService.todoLists.find(
        (list) => list.id === this.listId
      );
    });
  }

  onCreateTodo(input: HTMLInputElement) {
    let description = input.value;

    this.dataService.onCreateTodo(description, '0');
    input.value = '';
  }

  onBlur(input: HTMLInputElement) {
    if (!input.value) {
      input.value = '';
      this.isCreatingTodo = false;
    }
  }
}
