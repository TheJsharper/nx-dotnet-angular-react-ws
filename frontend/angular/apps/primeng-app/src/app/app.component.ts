import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimengTableProductComponent } from 'primeng-table-product';

@Component({
  standalone: true,
  imports: [RouterModule, PrimengTableProductComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
