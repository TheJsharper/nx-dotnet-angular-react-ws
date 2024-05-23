import { Component, OnDestroy, OnInit } from "@angular/core";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzTableModule } from "ng-zorro-antd/table";
import { Person } from "../models/person.models";
import { faker } from "@faker-js/faker";
import { NgFor } from "@angular/common";

@Component({
    selector: 'basics-table',
    standalone: true,
    imports: [NzTableModule, NzDividerModule, NgFor],
    templateUrl: './ng-zorro-basics-table.component.html'
})

export class NgZorroBasicsTableComponent implements OnInit, OnDestroy {

    listOfData: Person[] = [this.createRandomUser()];
    intervalRef?: number;

    ngOnInit(): void {
        this.intervalRef = setInterval(() => {
            this.listOfData = [...this.listOfData, this.createRandomUser()]
            console.log(this.listOfData);
            if (this.listOfData.length > 100)
                this.clearSetInterval();

        }, 5000);
    }

    private createRandomUser(): Person {
        return {
            key: faker.string.uuid(),
            name: faker.person.fullName(),
            age: Math.floor(Math.random() * 90) + 1,
            address: faker.location.country()
        };
    }

    private clearSetInterval(): void {
        clearInterval(this.intervalRef);

    }
    ngOnDestroy(): void {
        this.clearSetInterval();
    }
}