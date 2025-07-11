import { PersonDto } from '../dtos/person.request.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {

    persons: PersonDto[] = [
        {
            id: '1',
            fistName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
            address: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            zip: '12345',
            country: 'USA',
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true
        },
        {
            id: '2',
            fistName: 'Jane',
            lastName: 'Smith',
            email: '',
            phone: '987-654-3210',
            address: '456 Elm St',
            city: 'Othertown',
            state: 'NY',
            zip: '67890',
            country: 'USA',
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true

        }
    ];

    getPerson(): PersonDto[] {
        return this.persons;
    }

    getPersonById(id: string): PersonDto {
        return this.getPerson().find(p => p.id === id);
    }

    createPerson(person) {
        this.persons = [...this.persons, { ...person }];
    }

    updatePerson(person) {
        this.persons = this.persons.map(p => {
            if (p.id === person.id) {
                return { ...person };
            }
            return p;
        });
    }

    deletePerson(id: string) {
        this.persons = this.persons.filter(p => p.id !== id);
    }
}
