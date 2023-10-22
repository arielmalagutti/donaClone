import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo, TodoList } from '@models/index';

import { DataService } from '@services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  listNameEditorInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('listNameEditorInput') set todoInput(
    listInputRef: ElementRef<HTMLInputElement>
  ) {
    if (listInputRef) {
      this.listNameEditorInputRef = listInputRef;
      this.listNameEditorInputRef.nativeElement.focus();
    }
  }

  listId: string = 'home';
  todoList?: TodoList;

  isEditing: boolean = false;
  isActionsOpen: boolean = false;

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
      console.log(this.todoList?.icon);
    });
  }

  ngOnChanges() {}

  toggleActions() {
    this.isActionsOpen = !this.isActionsOpen;
  }

  onCreateTodo(input: HTMLInputElement) {
    let description = input.value;

    this.dataService.onCreateTodo(description, this.listId);
    input.value = '';
  }

  handleEditList(input: HTMLInputElement) {
    if (input.value.trim())
      this.dataService.onEditList({ id: this.listId, name: input.value });

    this.isEditing = false;
    this.isActionsOpen = false;
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
