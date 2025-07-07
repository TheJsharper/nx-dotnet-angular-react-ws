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


    it('should return a car by ID', () => {
        const res = createResponse();

        const car = service.getCarById("1", res);

        expect(car).toBeDefined();

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


})