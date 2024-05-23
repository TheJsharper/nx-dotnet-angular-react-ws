import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NzListModule } from "ng-zorro-antd/list";
@Component({
  selector: 'lib-basics-list',
  standalone: true,
  imports: [ NgFor, NgIf, NzListModule ],
  templateUrl: './basics-list.component.html',
  styleUrl: './basics-list.component.scss',
})
export class BasicsListComponent {
  loading = false;
  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];

  change(): void {
    this.loading = true;
    if (this.data.length > 0) {
      setTimeout(() => {
        this.data = [];
        this.loading = false;
      }, 1000);
    } else {
      setTimeout(() => {
        this.data = [
          {
            title: 'Ant Design Title 1'
          },
          {
            title: 'Ant Design Title 2'
          },
          {
            title: 'Ant Design Title 3'
          },
          {
            title: 'Ant Design Title 4'
          }
        ];
        this.loading = false;
      }, 1000);
    }
  }
}
