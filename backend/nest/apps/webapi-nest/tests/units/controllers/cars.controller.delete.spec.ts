import { Test, TestingModule } from '@nestjs/testing';
import { Response } from 'express';
import { createResponse, MockResponse } from 'node-mocks-http';
import { CarsController } from '../../../src/cars/controllers/cars.controller';
import { Car } from '../../../src/cars/models/cars.models';
import { CarsService } from '../../../src/cars/services/cars.service';


describe('deleteCar', () => {

    let carsController: CarsController;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CarsController],
            providers: [CarsService],
        }).compile();

        carsController = module.get<CarsController>(CarsController);
    });

    it('should delete a car by ID', async () => {


        const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

        const newCar = await carsController.createCar({ make: 'Toyota', model: 'Corolla', year: 2020, color: 'Blue' }, res);

        expect(newCar).toBeDefined();

        const dataCars = (res as MockResponse<Response<Car, Record<string, unknown>>>)._getJSONData();

        const carId = dataCars.id;

        const result = await carsController.deleteCar(carId.toString(), res);

        expect(result).toBeDefined();

        //expect(result).toBe(true);
    });

    it('should throw an error when deleting a car with an invalid ID', async () => {
        const invalidCarId = 'invalid';

        const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

        await expect(async () => {
            try {
                await carsController.deleteCar(invalidCarId as unknown as string, res);
            } catch (error) {
                throw new Error(error);
            }
        }).rejects.toThrow('Invalid car ID');
    });
    it('should throw an error when deleting a car that does not exist', async () => {
        const nonExistentCarId = 9999; // Assuming this ID does not exist

        const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

        await expect(async () => {
            try {
                await carsController.deleteCar(nonExistentCarId.toString(), res);
            } catch (error) {
                throw new Error(error);
            }
        }).rejects.toThrow('it does NOT exist id');
    });

    it('should throw an error when deleting a car with a negative ID', async () => {
        const negativeCarId = -1;

        const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

        await expect(async () => {
            try {
                await carsController.deleteCar(negativeCarId.toString(), res);
            } catch (error) {
                throw new Error(error);
            }
        }).rejects.toThrow('Invalid car ID - must be a positive number');
    });
});
