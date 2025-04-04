import { Component } from '@angular/core';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomePageComponent } from './gifs/pages/home/home-page.component';
import { GifsService } from './gifs/services/gifs.service';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, HomePageComponent],
  templateUrl: './app.component.html',
  providers: [GifsService],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
