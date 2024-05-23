import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { NzListModule } from "ng-zorro-antd/list";
export interface Data {
  descris: string;
  content: string[];
  avatar: string;
}
@Component({
  selector: 'lib-basics-list',
  standalone: true,
  imports: [NgFor, NgIf, NzListModule],
  templateUrl: './basics-list.component.html',
  styleUrl: './basics-list.component.scss',
})
export class BasicsListComponent implements OnInit {
  ngOnInit(): void {
    this.generateItem();
  }
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

  private generateItem(): Data[] {
    console.log("==>", new Array(100).fill(0).map((_) =>{ 
      console.log("==>",_)
      return faker.person.bio()}));
    /* const p =faker.person;
        faker.image.avatar();
        faker.definitions.metadata.title;
        faker.definitions.lorem.words;
      } */
    return [];
  }
}
