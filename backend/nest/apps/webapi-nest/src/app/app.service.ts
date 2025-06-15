import { Injectable } from '@nestjs/common';
interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
}
@Injectable()
export class AppService {
  cars: Car[] = [
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, color: 'Blue' },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019, color: 'Red' },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2021, color: 'Black' },
    { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2018, color: 'White' },
    { id: 5, make: 'Nissan', model: 'Altima', year: 2022, color: 'Silver' },
  ]
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
  getCars(): Car[] {
    return this.cars;
  }
}
