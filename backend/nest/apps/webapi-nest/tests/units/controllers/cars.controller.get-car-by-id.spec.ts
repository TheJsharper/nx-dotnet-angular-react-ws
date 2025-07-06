import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from '../../../src/cars/controllers/cars.controller';
import { Car } from '../../../src/cars/models/cars.models';
import { CarsService } from '../../../src/cars/services/cars.service';
import { createResponse, MockResponse } from 'node-mocks-http';
import { Response } from 'express';

describe('getCarById', () => {
    let carsController: CarsController;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CarsController],
            providers: [CarsService],
        }).compile();

        carsController = module.get<CarsController>(CarsController);
    });

    it('should return a car by ID', async () => {


        const res = createResponse();

        const newLocal = { make: 'Toyota', model: 'Corolla', year: 2020, color: 'Blue' };

        const returnValueRes = await carsController.createCar(newLocal, res);

        const dataCars = (returnValueRes as MockResponse<Response<Car, Record<string, unknown>>>)._getJSONData();

        expect(returnValueRes).toBeDefined();

        expect(dataCars.id).toBeDefined();

        expect(dataCars).toStrictEqual({ ...newLocal, id: dataCars.id });

        const response: MockResponse<Response<unknown, Record<string, unknown>>> = (await carsController.getCarById(dataCars.id.toString(), res)) as MockResponse<Response<unknown, Record<string, unknown>>>;

        expect(response).toBeDefined();

        expect(response.statusCode).toBe(200);

        expect(response.getHeader('Content-Type')).toBe('application/json');

        expect(response._isJSON()).toBe(true);

    });

    it('should throw an error when car ID is invalid', async () => {
        const invalidCarId = 'invalid';

        await expect(async () => {
            try {
                const res = createResponse();

                await carsController.getCarById(invalidCarId, res);

            } catch (error) {
                throw new Error(error.message);
            }
        }).rejects.toThrow('Invalid car ID- Car ID must be a number');
    });

    it('should throw an error when car ID does not exist', async () => {
        const nonExistentCarId = '9999'; // Assuming this ID does not exist

        await expect(async () => {
            try {
                const res = createResponse();

                await carsController.getCarById(nonExistentCarId, res);

            } catch (error) {

                throw new Error(error.message);
            }
        }).rejects.toThrow('Car not found with ID: 9999');
    });
    it('should throw an error when car ID is negative', async () => {
        const negativeCarId = '-1';

        await expect(async () => {
            try {
                const res = createResponse();

                await carsController.getCarById(negativeCarId, res);

            } catch (error) {
                throw new Error(error.message);
            }
        }).rejects.toThrow(`Invalid car ID ${negativeCarId} - must be a positive number`);
    });
});
