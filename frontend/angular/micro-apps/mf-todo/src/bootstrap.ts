import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { TodoMainComponent } from './lib/todo-component';
import { appConfig } from './app/app.config';

bootstrapApplication(/*RemoteEntryComponent,*/ TodoMainComponent,  appConfig).catch((err) =>
  console.error(err),
);
