import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoList } from '@models/index';

import { DataService } from '@services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  @ViewChild('input') input?: HTMLInputElement;
  todoLists: TodoList[] = this.data.todoLists;
  newList?: TodoList;

  listId: string | null = null;

  isEditing: boolean = false;
  isSelected: boolean = false;

  constructor(private data: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('listId');
  }

  createNewList() {
    this.isEditing = true;
    this.input?.focus();
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

  onBlur() {
    this.isEditing = false;
  }
}
