import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from '../../../src/cars/services/cars.service';


describe('CarsService.get-cars', () => {
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

    it('should return all cars', async () => {
        const cars = await service.getAllCars();

        expect(cars).toBeDefined();

        expect(cars.length).toBeGreaterThan(0);
    });    

    it('should create multiple cars and return them', async () => {

        const car1 = await service.createCar({ make: 'BMW', model: 'X5', year: 2023, color: 'Black' });

        const car2 = await service.createCar({ make: 'Audi', model: 'A4', year: 2023, color: 'Silver' });

        const cars = await service.getAllCars();

        expect(cars.length).toBeGreaterThan(2);

        expect(cars.some(car => car.id === car1.id)).toBe(true);

        expect(cars.some(car => car.id === car2.id)).toBe(true);
    }
    );
})