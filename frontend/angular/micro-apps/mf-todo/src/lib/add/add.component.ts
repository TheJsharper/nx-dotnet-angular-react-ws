import { Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";
import { AddTodoAction } from "../mf-todo/store/todo.actions";
import { TodosState } from '../mf-todo/store/todo.reducer';

@Component({
    selector: 'lib-app-add',
    templateUrl: './add.component.html',
    imports: [ReactiveFormsModule],
    styleUrls: ['./add.component.scss']
})
export class AddComponent {
  contentInput: FormControl<string |null> ;

  constructor(@Inject(Store)private store: Store<TodosState>) {
    this.contentInput = new FormControl<string | null>(null, Validators.required);
  }

 
  addTodo(): void {
    if (this.contentInput?.invalid) return;

    const action: AddTodoAction = new AddTodoAction(this.contentInput.value??'');
    this.store.dispatch(action);
    this.contentInput?.setValue('');

  }

}
