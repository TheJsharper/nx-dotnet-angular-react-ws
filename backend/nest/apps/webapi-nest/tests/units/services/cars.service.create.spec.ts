import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from '../../../src/cars/services/cars.service';
describe('CarsService.createCar', () => {
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

  it('should create a new car', async () => {
    const carData = { make: 'Tesla', model: 'Model S', year: 2022, color: 'White' };
    const newCar = await service.createCar(carData);
    expect(newCar).toBeDefined();
    expect(newCar.make).toBe('Tesla');
    expect(newCar.id).toBeGreaterThan(0);
    expect(newCar).toStrictEqual({
      ...carData, id: newCar.id
    });
  });

  it('should not create a car with missing required fields', () => {
    expect(async () => {
      try {
        await service.createCar({ make: 'Missing Model', model: undefined as never, year: 2023, color: 'Green' });
      } catch (error) {
        throw new Error(error.message);
      }
    }).rejects.toThrow('Invalid car data');
  })

  it('should not create a car with invalid data', () => {
    expect(async () => {
      try {
        await service.createCar({ make: 'Invalid Car', model: 'Model', year: undefined as never, color: 'Blue' }); // Invalid year
      } catch (error) {
        throw new Error(error.message);
      }
    }).rejects.toThrow('Invalid car data');
  });

  it('should not create a car with invalid types', () => {
    expect(async () => {
      try {
        await service.createCar({ make: 'Invalid Type', model: 'Model', year: 2023, color: 123 as never }); // Invalid color type
      } catch (error) {
        throw new Error(error.message);
      }
    }).rejects.toThrow('Invalid car data types');
  });

  it('should not create a car with negative year', () => {
    expect(async () => {
      try {
        await service.createCar({ make: 'Negative Year', model: 'Model', year: -2023, color: 'Red' });
      } catch (error) {
        throw new Error(error.message);
      }
    }).rejects.toThrow('Invalid year');
  });
  it('should not create a car with so far in the future', () => {
    expect(async () => {
      try {
        await service.createCar({ make: 'Negative Year', model: 'Model', year: 5001, color: 'Red' });
      } catch (error) {
        throw new Error(error.message);
      }
    }).rejects.toThrow('Invalid year');
  });

})