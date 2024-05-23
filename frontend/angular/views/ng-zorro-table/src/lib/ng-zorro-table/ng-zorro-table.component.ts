import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { faker } from '@faker-js/faker';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'lib-ng-zorro-table',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzDividerModule],
  templateUrl: './ng-zorro-table.component.html',
  styleUrl: './ng-zorro-table.component.scss',
 // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgZorroTableComponent implements OnInit {

  listOfData: Person[] = [this.createRandomUser()];

  ngOnInit(): void {

   

    setInterval(() => {
      //this.listOfData.push( this.createRandomUser());
      //this.listOfData = [...this.listOfData]
      //this.listOfData = this.listOfData.map((d)=> this.createRandomUser() );
      this.listOfData = [...this.listOfData, this.createRandomUser()]
      console.log(this.listOfData)
    }, 5000);
  }

  private  createRandomUser(): Person {
    return {
      key: faker.string.uuid(),
      name: faker.person.fullName(),
      age: Math.floor( Math.random() *90) +1,
      address : faker.location.country()
    };
  }
  
}
