import { bootstrapApplication } from '@angular/platform-browser';
import { TodoMainComponent } from './lib/todo-component';
import { appConfig } from './app/app.config';

bootstrapApplication(TodoMainComponent,  appConfig).catch((err) =>
  console.error(err),
);
