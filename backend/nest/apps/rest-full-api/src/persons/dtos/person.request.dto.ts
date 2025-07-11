import { Person } from '../models/person.model';

export class PersonDto implements Omit<Person, 'createdAt' | 'updatedAt' | 'isActive' | 'isDeleted' | 'deletedAt' | 'createdBy' | 'updatedBy' | 'version' | 'tenantId'> {
   id: string;
   fistName: string;
   lastName: string;
   email: string;
   phone: string;
   address: string;
   city: string;
   state: string;
   zip: string;
   country: string;
   createdAt: Date;
   updatedAt: Date;
   isActive: boolean;
}
