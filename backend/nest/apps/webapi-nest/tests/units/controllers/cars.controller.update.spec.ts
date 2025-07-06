import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from '../../../src/cars/controllers/cars.controller';
import { Car } from '../../../src/cars/models/cars.models';
import { CarsService } from '../../../src/cars/services/cars.service';
describe('updateCar', () => {
    let carsController: CarsController;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CarsController],
            providers: [CarsService],
        }).compile();

        carsController = module.get<CarsController>(CarsController);
    });

    it('should update a car by ID', async () => {
        const updatedCar: Car = { id: 1, make: 'Toyota', model: 'Camry', year: 2021, color: 'Black' };

        const carId = 1;

        const result = await carsController.updateCar(carId.toString(), updatedCar);

        expect(result).toBeDefined();
        expect(result.id).toBe(carId);
        expect(result.make).toBe(updatedCar.make);
        expect(result.model).toBe(updatedCar.model);
        expect(result.year).toBe(updatedCar.year);
        expect(result.color).toBe(updatedCar.color);
    });

    it('should throw an error when updating a car with invalid data', async () => {
        const invalidUpdate: Car = { make: null as unknown as never, model: 'Civic', year: 2019, color: 'Red' }; // make is null
        const carId = 1;

        await expect(async () => {
            try {
                const result = await carsController.updateCar(carId.toString(), invalidUpdate);

                return result;

            } catch (error) {
                throw new Error(error.message);
            }
        }).rejects.toThrow('Invalid car data');
    });

    it('should throw an error when updating a car with missing properties', async () => {
        const invalidUpdate: Partial<Car> = { make: 'Honda', model: 'Civic', year: 2019 }; // Missing color
        const carId = 1;

        await expect(async () => {
            try {
                const result = await carsController.updateCar(carId.toString(), invalidUpdate as Car);

                return result;

            } catch (error) {
                throw new Error(error.message);
            }
        }).rejects.toThrow('Invalid car data');
    });

    it('should throw an error when updating a car with null properties', async () => {
        const invalidUpdate: Partial<Car> = { make: null as unknown as never, model: 'Civic', year: 2019, color: 'Red' }; // make is null
        const carId = 1;

        await expect(async () => {
            try {
                const result = await carsController.updateCar(carId.toString(), invalidUpdate as Car);

                return result;

            } catch (error) {
                throw new Error(error.message);
            }
        }).rejects.toThrow('Invalid car data');
    }
    );
    it('should throw an error when updating a car with invalid year', async () => {
        const invalidUpdate: Partial<Car> = { make: 'Honda', model: 'Civic', year: 1800, color: 'Red' }; // Invalid year
        const carId = 1;

        await expect(async () => {
            try {
                const result = await carsController.updateCar(carId.toString(), invalidUpdate as Car);

                return result;

            } catch (error) {
                throw new Error(error.message);
            }
        }).rejects.toThrow('Invalid year');
    });
    it('should throw an error when updating a car with invalid data types', async () => {
        const invalidUpdate: Partial<Car> = { make: 'Honda', model: 'Civic', year: 2020, color: 1 as unknown as string }; // Invalid color type
        const carId = 1;

        await expect(async () => {
            try {
                const result = await carsController.updateCar(carId.toString(), invalidUpdate as Car);

                return result;

            } catch (error) {
                throw new Error(error.message);
            }
        }).rejects.toThrow('Invalid car data types');
    });

    it('should throw an error when updating a car with a different ID', async () => {

        const invalidUpdate: Partial<Car> = { id: 2, make: 'Honda', model: 'Civic', year: 2020, color: 'Red' }; // Trying to change ID

        const carId = 1;

        await expect(async () => {
            try {
                const result = await carsController.updateCar(carId.toString(), invalidUpdate as Car);

                return result;

            } catch (error) {
                throw new Error(error.message);
            }
        }).rejects.toThrow('Cannot change car ID');
    });
})