import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../models/todo.model";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import { NgClass } from '@angular/common';
import { TodosState } from '../mf-todo/store/todo.reducer';
import { DeleteTodoAction, EditTodoAction, ToggleTodoAction } from '../mf-todo/store/todo.actions';

@Component({
    selector: 'lib-app-item',
    templateUrl: './item.component.html',
    imports: [ReactiveFormsModule, NgClass],
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input({required: true}) todo!: Todo;

  @ViewChild('contentInput', {static:true}) contentInput!: ElementRef;

  chkField!: FormControl;
  content!: FormControl;
  editing!: boolean;

  constructor(@Inject(Store) private  store: Store<TodosState>) {
  }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completion);
    this.content = new FormControl(this.todo.content, Validators.required);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.chkField.valueChanges.subscribe((value: boolean) => this.store.dispatch(new ToggleTodoAction(this.todo.id)));
  }

  edit(): void {
    this.editing = true;
    setTimeout(() => {
      this.contentInput.nativeElement.select();
    }, 20);

  }

  leave(): void {
    this.editing = false;
    this.store.dispatch(new EditTodoAction(this.todo.id, this.content.value));
  }

  deleteTodo(): void {
      this.store.dispatch(new DeleteTodoAction(this.todo.id));
  }
}
