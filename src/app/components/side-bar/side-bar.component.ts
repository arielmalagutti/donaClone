import { Component } from '@angular/core';

type TodoList = {
  icon?: string;
  name: string;
  todos?: [];
};

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  todoLists: TodoList[] = [
    {
      name: 'Home',
    },
  ];
}
