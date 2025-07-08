import { Test, TestingModule } from '@nestjs/testing';
import { createResponse } from 'node-mocks-http';
import { CarsService } from '../../../src/cars/services/cars.service';

describe('CarsService.get-car-by-id', () => {
    let service: CarsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CarsService],
        }).compile();

        service = module.get<CarsService>(CarsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });


    it('should return a car by ID', async () => {
        const res = createResponse();

        const newCar = await service.createCar({ make: 'BMW', model: 'X5', year: 2023, color: 'Black' });

        expect(newCar).toBeDefined();

        expect(newCar.id).toBeDefined();

        const car = await service.getCarById(String(newCar.id), res);

        expect(car).toBeDefined();

        const data = res._getJSONData();

        expect(data).toStrictEqual({ ...newCar, id: newCar.id });


    });



    it('should return undefined for a non-existing car', async () => {
        const res = createResponse();
        expect(async () => {
            try {
                await service.getCarById("999", res);
            }
            catch (error) {
                expect(error).toBeDefined();
                expect(error.message).toBe('Car not found with ID: 999');
                throw new Error(error.message);
            }
        }).rejects.toThrow('Car not found with ID: 999');
    });

    it('should throw an error for invalid ID', async () => {
        const res = createResponse();
        expect(async () => {
            try {
                await service.getCarById("invalid-id", res);
            }
            catch (error) {
                expect(error).toBeDefined();
                expect(error.message).toBe('Invalid car ID- Car ID must be a number');
                throw new Error(error.message);
            }
        }).rejects.toThrow('Invalid car ID- Car ID must be a number');
    });

    it('should throw an error for negative ID', async () => {
        const res = createResponse();
        expect(async () => {
            try {
                await service.getCarById("-1", res);
            }
            catch (error) {
                expect(error).toBeDefined();
                expect(error.message).toBe('Invalid car ID - must be a positive number');
                throw new Error(error.message);
            }
        }).rejects.toThrow('Invalid car ID - must be a positive number');
    });

    it('should throw an error for zero ID', async () => {
        const res = createResponse();
        expect(async () => {
            try {
                await service.getCarById("0", res);
            }
            catch (error) {
                expect(error).toBeDefined();
                expect(error.message).toBe('Invalid car ID - must be a positive number');
                throw new Error(error.message);
            }
        }).rejects.toThrow('Invalid car ID - must be a positive number');
    });

    it('should throw an error for non-integer ID', async () => {
        const res = createResponse();
        expect(async () => {
            try {
                await service.getCarById("1.5", res);
            }
            catch (error) {
                expect(error).toBeDefined();
                expect(error.message).toBe('Invalid car ID- Car ID must be a number');
                throw new Error(error.message);
            }
        }).rejects.toThrow('Invalid car ID- Car ID must be a number');
    });

})