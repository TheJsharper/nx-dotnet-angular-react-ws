import { Injectable } from '@nestjs/common';
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
    getCarById(id: number): Car | undefined {
        return this.cars.find(car => car.id === id);
    }
    createCar(carData: Omit<Car, "id">): Car {
        if (!carData.make || !carData.model || !carData.year || !carData.color) {
            throw new Error('Invalid car data');
        }

        Object.values(carData).filter(value => value === undefined || value === null).some((value) => {
            if (value === undefined || value === null) {
                throw new Error('Invalid car data');
            }
        });

        const newCar: Car = {
            ...carData,
            id: this.cars.length ? Math.max(...this.cars.map(car => car.id)) + 1 : 1
        };
        this.cars.push(newCar);
        return newCar;
    }
    updateCar(id: number, carData: Partial<Car>): Car | undefined {
        if (typeof id !== 'number' || id <= 0) {
            throw new Error('Invalid car ID');
        }


        Object.values(carData).filter(value => value === undefined || value === null).some((value) => {
            if (value === undefined || value === null) {
                throw new Error('Invalid car data');
            }
        });

        if (!carData || Object.keys(carData).length === 0) {
            throw new Error('Invalid car data');
        }
        const carIndex = this.cars.findIndex(car => car.id === id);

        if (carIndex === -1) {
            throw new Error('Car not found');
        }

        if (carData.id && carData.id !== id) {
            throw new Error('Cannot change car ID');
        }
        const updatedCar = { ...this.cars[carIndex], ...carData };
        this.cars[carIndex] = updatedCar;
        return updatedCar;
    }
    deleteCar(id: number): boolean {
        const carIndex = this.cars.findIndex(car => car.id === id);
        if (carIndex === -1) {
            return false;
        }
        this.cars.splice(carIndex, 1);
        return true;
    }
}
