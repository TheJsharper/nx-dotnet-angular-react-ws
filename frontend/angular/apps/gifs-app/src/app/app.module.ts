import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),

    GifsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
