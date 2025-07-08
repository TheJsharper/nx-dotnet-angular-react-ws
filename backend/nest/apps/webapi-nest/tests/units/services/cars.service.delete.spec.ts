import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from '../../../src/cars/services/cars.service';
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
        const newLocal = { make: 'BMW', model: 'X5', year: 2023, color: 'Black' };
        // Create a car to delete
        const carResponse = await service.createCar(newLocal);

        expect(carResponse).toBeDefined();

        expect(carResponse.id).toBeDefined();

        expect(carResponse).toStrictEqual({
            ...newLocal, id: carResponse.id
        });

        if (carResponse.id === undefined) {
            throw new Error('carResponse.id is undefined');
        }

        const deleteResult = await service.deleteCar(carResponse.id);

        expect(deleteResult).toBe(true);


        // Verify the car is deleted
        const cars = await service.getAllCars();

        expect(cars.length).toBeGreaterThan(0);

        expect(cars.some(car => car.id === carResponse.id)).toBe(false);
    });

    it('should return false when deleting a non-existing car', () => {

        expect(() => service.deleteCar(999).then(console.log).catch((err: Error) => { throw new Error(err.message); })

        ).rejects.toThrow(
            'it does NOT exist id'
        );
    }
    );


    it('should throw an error when trying to delete a car with an invalid ID', () => {
        expect(() => service.deleteCar(-1).then(console.log).catch((err: Error) => { throw new Error(err.message); })

        ).rejects.toThrow(
            'Invalid car ID - must be a positive number'
        );
    });
    it('should throw an error when trying to delete a car with a non-integer ID', () => {
        expect(() => service.deleteCar("non-number" as never).then(console.log).catch((err: Error) => { throw new Error(err.message); })

        ).rejects.toThrow(
            'Invalid car ID'
        );
    });
    it('should throw an error when trying to delete a car with an ID that is not a number', () => {
        expect(() => service.deleteCar("string-id" as never).then(console.log).catch((err: Error) => { throw new Error(err.message); })

        ).rejects.toThrow(
            'Invalid car ID'
        );
    });

    it('should throw an error when trying to delete a car with an ID that is NaN', () => {
        expect(() => service.deleteCar(NaN as never).then(console.log).catch((err: Error) => { throw new Error(err.message); })

        ).rejects.toThrow(
            'Invalid car ID'
        );
    });

    it('should throw an error when trying to delete a car with an ID that is not a number', () => {
        expect(() => service.deleteCar(1.4).then(console.log).catch((err: Error) => { throw new Error(err.message); })

        ).rejects.toThrow(
            'Invalid car ID - must be an integer'
        );
    }
    );

})