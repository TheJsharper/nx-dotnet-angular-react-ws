import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from '../../../src/cars/services/cars.service';
import { createResponse } from 'node-mocks-http';

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



    it('should return undefined for a non-existing car', () => {
        const res = createResponse();
        const car = service.getCarById("999", res);
        expect(car).toBeUndefined();
    });


})