import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from "ng-zorro-antd/list";
export interface Data {
  description: string;
  content:  string;
  avatar: string;
}
@Component({
  selector: 'lib-basics-list',
  standalone: true,
  imports: [ NzListModule, NzButtonModule],
  templateUrl: './basics-list.component.html',
  styleUrl: './basics-list.component.scss',
})
export class BasicsListComponent implements OnInit {
  fakeData:Data[] =[];

  ngOnInit(): void {
   this.fakeData= this.generateItem();
  }
  loading = false;
  
  change(): void {
    this.loading = true;
    if (this.fakeData.length > 0) {
      setTimeout(() => {
        this.fakeData = [];
        this.loading = false;
      }, 1000);
    } else {
      setTimeout(() => {
      
        this.fakeData = this.generateItem();
        this.loading = false;
      }, 1000);
    }
  }

  private generateItem(): Data[] {

    const result:Data[]  =faker.helpers.multiple(()=>{
      return ({description: faker.lorem.lines(2), content: faker.lorem.sentences(10), avatar: faker.image.avatar()})
    },{count:15});
    return result;
  }
}
