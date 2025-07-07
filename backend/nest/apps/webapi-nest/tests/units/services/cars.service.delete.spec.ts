import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from '../../../src/cars/services/cars.service';
import { createResponse } from 'node-mocks-http';
describe('CarsService.delete', () => {
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

    it('should delete a car', async () => {
        const res = createResponse();
        const deleteResult = await service.deleteCar(1);
        expect(deleteResult).toBe(true);
        const car = service.getCarById("1", res);
        expect(car).toBeUndefined();
    });

    it('should return false when deleting a non-existing car', () => {
        const deleteResult = service.deleteCar(999);
        expect(deleteResult).toBe(false);
    }
    );
    it('should return all cars after deletion', () => {
        service.deleteCar(1);
        const cars = service.getAllCars();
        expect(cars.length).toBeGreaterThan(0);
        expect(cars.some(car => car.id === 1)).toBe(false);
    }
    );
})