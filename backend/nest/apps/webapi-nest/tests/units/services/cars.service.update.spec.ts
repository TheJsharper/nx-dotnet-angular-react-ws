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

    it('should update an existing car', async () => {
        const res = createResponse();

        const car = await service.getCarById("1", res);

        expect(car).toBeDefined();

        const dataResponse = res._getJSONData();

        expect(dataResponse).toBeDefined();

        const updatedCar = await service.updateCar(dataResponse.id, { make: 'Updated Make', model: "Model S Update", year: 2023, color: 'Blue' });

        expect(updatedCar).toBeDefined();

        expect(updatedCar.make).toBe('Updated Make');

        expect(updatedCar.model).toBe('Model S Update');

        expect(updatedCar.year).toBe(2023);

        expect(updatedCar.color).toBe('Blue');
    });

    it('should not update a car with invalid data', async () => {
        const res = createResponse();

        const car = await service.getCarById("1", res);

        expect(car).toBeDefined();

        const dataResponse = res._getJSONData();

        expect(dataResponse).toBeDefined();

        expect(async () => {
            try {
                await service.updateCar(dataResponse.id, { make: 'Updated Make', model: undefined as never, year: 2023, color: 'Blue' }); // Invalid model
            } catch (error) {
                throw new Error(error.message);
            }
        }).rejects.toThrow('Invalid car data');
    });
    it('should not update a car with invalid id', async () => {
        const res = createResponse();

        const car = await service.getCarById("1", res);

        expect(car).toBeDefined();

        const dataResponse = res._getJSONData();

        expect(dataResponse).toBeDefined();

        expect(async () => {
            try {
                await service.updateCar(2, { id: dataResponse.id, make: 'Updated Make', model: "Model S Update", year: 2023, color: 'Blue' }); // Invalid id
            } catch (error) {
                throw new Error(error.message);
            }
        }).rejects.toThrow('Cannot change car ID');
    });

    it('should not update a car with an invalid ID', () => {
        expect(async () => {
            try {
                await service.updateCar(-1, { make: 'Invalid ID', model: 'Model', year: 2023, color: 'Blue' });
            } catch (error) {
                throw new Error(error.message);
            } // Non-existing car
        }).rejects.toThrow('Invalid car ID - must be a positive number');
    });

    it('should not update a car with an ID that does not exist', () => {
        expect(async () => {
            try {
                await service.updateCar(999, { id: 999, make: 'Non-existing Car', model: 'Model', year: 2023, color: 'Blue' });
            } catch (error) {
                throw new Error(error.message);
            } // Non-existing car
        }).rejects.toThrow('Car not found with ID: 999');
    });

})