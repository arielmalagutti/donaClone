import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodoList } from '@models/index';

import { DataService } from '@services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  newListInputElement!: ElementRef<HTMLInputElement>;

  @ViewChild('newListInput') set newListInput(
    listInputRef: ElementRef<HTMLInputElement>
  ) {
    if (listInputRef) {
      this.newListInputElement = listInputRef;
      this.newListInputElement.nativeElement.focus();
    }
  }

  todoLists: TodoList[] = this.data.todoLists;
  newList?: TodoList;

  listId: string | null = null;

  isEditing: boolean = false;
  isSelected: boolean[] = [];

  constructor(private data: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('listId');
    this.todoLists.forEach((todoList) => this.isSelected.push(false));
  }

  createNewList() {
    this.isEditing = true;
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

  handleSelected(index: number) {
    this.isSelected = this.isSelected.map((listSelected) => {
      return (listSelected = false);
    });
    this.isSelected[index] = true;
  }

  onBlur() {
    this.isEditing = false;
  }

  log(a: any) {
    console.log(a);
  }
}
