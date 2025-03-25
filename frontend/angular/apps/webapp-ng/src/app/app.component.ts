import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports:[RouterOutlet, RouterLink, RouterLinkActive ],
  standalone:true,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
