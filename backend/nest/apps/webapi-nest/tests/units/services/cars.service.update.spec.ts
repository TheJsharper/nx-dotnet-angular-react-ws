import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from '../../../src/cars/services/cars.service';
import { createResponse } from 'node-mocks-http';

describe('CarsService.update', () => {
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

    it('should not update a car with invalid data', () => {
        const res = createResponse();
        const car = service.getCarById("1", res);
        expect(car).toBeDefined();
        expect(() => {
            service.updateCar(1, { color: undefined }); // Invalid update
        }).toThrow('Invalid car data');
    });

    it('should not update a car with an invalid ID', () => {
        expect(() => {
            service.updateCar(999, { color: 'Blue' }); // Non-existing car
        }).toThrow('Car not found');
    });

    it('should update an existing car', async () => {
        const updatedCar = await service.updateCar(1, { color: 'Red' });
        expect(updatedCar).toBeDefined();
        expect(updatedCar.color).toBe('Red');
    });


})