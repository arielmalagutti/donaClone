import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodoList } from '@models/index';

import { DataService } from '@services/data.service';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  newListInputElement!: ElementRef<HTMLInputElement>;

  @ViewChild('newListInput') set newListInput(
    listInputRef: ElementRef<HTMLInputElement>,
  ) {
    if (listInputRef) {
      this.newListInputElement = listInputRef;
      this.newListInputElement.nativeElement.focus();
    }
  }

  todoLists: TodoList[] = this.data.todoLists;
  newList?: TodoList;

  listId: string | null = null;

  isCreatingList: boolean = false;
  isEditing: boolean[] = new Array(this.todoLists.length).fill(false);
  isActionsOpen: boolean[] = new Array(this.todoLists.length).fill(false);

  isSelected: boolean[] = [];

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('listId');
    this.initializeSelectedList();
  }

  private initializeSelectedList() {
    this.todoLists.forEach((todoList) =>
      this.isSelected.push(todoList.id === this.listId),
    );
  }

  /** @param index */
  toggleActionsDropwdown(listIndex: number) {
    this.isActionsOpen = this.isActionsOpen.map((_, id) =>
      id === listIndex
        ? (this.isActionsOpen[listIndex] = !this.isActionsOpen[listIndex])
        : false,
    );
  }

  /**
   * Dummy fn: Holds no data
   * @param index
   */
  toggleEditing(listIndex: number) {
    this.isEditing = this.isEditing.map((_, id) =>
      id === listIndex
        ? (this.isEditing[listIndex] = !this.isEditing[listIndex])
        : false,
    );

    this.isActionsOpen = this.isActionsOpen.map(
      (_, id) => id === listIndex && (this.isActionsOpen[listIndex] = false),
    );
  }

  createNewList() {
    this.isCreatingList = true;
  }

  handleNewList(listName: string) {
    this.newList = {
      id: String(this.todoLists.length + 1),
      name: listName,
      todos: [],
    };

    try {
      if (!this.newList)
        throw new Error('Please give a name to your new list!');
      this.data.onCreateList(this.newList);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Triggers the onEdit fn in .src/services/data.service.ts then sets the isEditing state to false
   * @param input
   * @param index
   */
  handleEditList(
    input: HTMLInputElement,
    listIndex: number,
    listId: TodoList['id'],
  ) {
    this.data.onEditList({ id: listId, name: input.value });

    this.isEditing = this.isEditing.map((_, id) =>
      id === listIndex
        ? (this.isEditing[listIndex] = !this.isEditing[listIndex])
        : false,
    );
  }

  handleSelected(index: number) {
    this.isSelected.fill(false);
    this.isSelected[index] = true;
  }

  onBlur() {
    this.isCreatingList = false;
  }

  drop(event: CdkDragDrop<TodoList[]>) {
    moveItemInArray(this.todoLists, event.previousIndex, event.currentIndex);
  }
}
