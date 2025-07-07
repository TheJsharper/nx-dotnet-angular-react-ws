import { BadRequestException, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { Car } from '../models/cars.models';
@Injectable()
export class CarsService {
    cars: Car[] = [
        { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, color: 'Blue' },
        { id: 2, make: 'Honda', model: 'Civic', year: 2019, color: 'Red' },
        { id: 3, make: 'Ford', model: 'Mustang', year: 2021, color: 'Black' },
        { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2018, color: 'White' },
        { id: 5, make: 'Nissan', model: 'Altima', year: 2022, color: 'Silver' },
    ]


    getAllCars(): Car[] {
        return this.cars;
    }
    async getCarById(id: string, res: Response): Promise<Response> {

        if (typeof id !== 'string' || isNaN(Number(id))) {

            throw new BadRequestException({ message: `Invalid car ID- Car ID must be a number` });

        }
        const idNumber = Number(id);

        if (idNumber <= 0) {
            throw new BadRequestException({ message: `Invalid car ID ${idNumber} - must be a positive number` });
        }

        const found = this.cars.find(car => car.id === idNumber);

        if (!found) {
            throw new BadRequestException({ message: `Car not found with ID: ${id}` });
        }


        return Promise.resolve(res.status(200).json(found));
    }

    private validateCarData(carData: Omit<Car, "id">): { key: string, status: boolean, message: string } {


        if (!carData.make || !carData.model || !carData.year || !carData.color || !carData.year
        ) {
            return { key: 'properties', status: false, message: 'Invalid car data' };
        }

        if (typeof carData.year !== 'number' || carData.year <= 1885 || carData.year > 5000) {
            return { key: 'year', status: false, message: 'Invalid year' };
        }

        if (typeof carData.make !== 'string' || typeof carData.model !== 'string' || typeof carData.color !== 'string') {
            return { key: 'type', status: false, message: 'Invalid car data types' };
        }

        return { key: 'valid', status: true, message: 'Valid car data' };
    }


    async createCar(carData: Omit<Car, "id">): Promise<Car> {

        const validation = this.validateCarData(carData);


        if (!validation.status) {

            throw new BadRequestException({ message: validation.message });
        }

        const newCar: Car = {
            ...carData,
            id: this.cars.length ? Math.max(...this.cars.map(car => car.id)) + 1 : 1
        };
        this.cars.push(newCar);
        return await Promise.resolve(newCar);

    }
    updateCar(id: number, carData: Partial<Car>): Promise<Car> {
        if (typeof id !== 'number' || id <= 0 || isNaN(id)) {
            throw new BadRequestException({ message: 'Invalid car ID - must be a positive number' });
        }



        const validation = this.validateCarData(carData as Omit<Car, "id">);

        if (!validation.status) {
            throw new BadRequestException({ message: validation.message });
        }

        const carIndex = this.cars.findIndex(car => car.id === id);


        if (carData.id && carData.id !== id) {
            throw new BadRequestException({ message: 'Cannot change car ID' });
        }

        if (carIndex === -1) {
            throw new BadRequestException({ message: 'Car not found' });
        }

        const updatedCar = { ...this.cars[carIndex], ...carData };

        this.cars[carIndex] = updatedCar;

        return Promise.resolve(updatedCar);
    }
    async deleteCar(id: number): Promise<boolean> {

        if (typeof id !== 'number' || isNaN(id)) {

            throw new BadRequestException({ message: 'Invalid car ID' });

        }
        if (id <= 0) {

            throw new BadRequestException({ message: 'Invalid car ID - must be a positive number' });

        }
        const carIndex = this.cars.findIndex(car => car.id === id);

        if (carIndex === -1) {

            throw new BadRequestException({ message: 'it does NOT exist id' });
        }

        this.cars.splice(carIndex, 1);

        return Promise.resolve(true);
    }
}
