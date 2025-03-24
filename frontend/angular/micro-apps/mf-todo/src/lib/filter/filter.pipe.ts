import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from '../models/todo.model';

@Pipe({
  name: 'filterTodo',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: 'completed' | 'pending' | 'all' ): Todo[] {
    if (!todos) {
      return [];
    }
    switch (filter) {
      case 'completed':
        return todos.filter((todo: Todo) => todo.completion);
      case 'pending':
        return todos.filter((todo: Todo) => !todo.completion);
      default: {
        return todos;
      }
    }
  }

}
