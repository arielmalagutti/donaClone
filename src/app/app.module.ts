import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo-list/todo/todo.component';
import { ActionsDropdownComponent } from './components/actions-dropdown/actions-dropdown.component';
import { IconPickerComponent } from './components/icon-picker/icon-picker.component';
import { DonaSvgComponent } from './components/dona-svg/dona-svg.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { ActionsButtonComponent } from './components/actions-button/actions-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    SideBarComponent,
    TodoListComponent,
    TodoComponent,
    ActionsDropdownComponent,
    IconPickerComponent,
    DonaSvgComponent,
    DropdownDirective,
    ActionsButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
