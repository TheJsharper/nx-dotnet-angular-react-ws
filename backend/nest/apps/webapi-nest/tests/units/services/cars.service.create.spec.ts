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
    const newCar = await service.createCar({ make: 'Tesla', model: 'Model S', year: 2022, color: 'White' });
    expect(newCar).toBeDefined();
    expect(newCar.make).toBe('Tesla');
    expect(newCar.id).toBeGreaterThan(0);
  });

   it('should not create a car with missing required fields', () => {
    expect(() => {
      service.createCar({ make: 'Missing Model', model: undefined as never, year: 2023, color: 'Green' });
    }).toThrow('Invalid car data');
  })

    it('should not create a car with invalid data', () => {
    expect(() => {
      service.createCar({ make: 'Invalid Car', model: 'Model', year: undefined as never, color: 'Blue' }); // Invalid year
    }).toThrow('Invalid car data');
  });


})