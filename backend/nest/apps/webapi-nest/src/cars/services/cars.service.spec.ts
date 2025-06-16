import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from './cars.service';

describe('CarsService', () => {
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

  it('should return all cars', () => {
    const cars = service.getAllCars();
    expect(cars).toBeDefined();
    expect(cars.length).toBeGreaterThan(0);
  });

  it('should return a car by ID', () => {
    const car = service.getCarById(1);
    expect(car).toBeDefined();
    expect(car.id).toBe(1);
  });

  it('should create a new car', () => {
    const newCar = service.createCar({ make: 'Tesla', model: 'Model S', year: 2022, color: 'White' });
    expect(newCar).toBeDefined();
    expect(newCar.make).toBe('Tesla');
    expect(newCar.id).toBeGreaterThan(0);
  });

  it('should update an existing car', () => {
    const updatedCar = service.updateCar(1, { color: 'Red' });
    expect(updatedCar).toBeDefined();
    expect(updatedCar.color).toBe('Red');
  });
  
  it('should delete a car', () => {
    const deleteResult = service.deleteCar(1);
    expect(deleteResult).toBe(true);
    const car = service.getCarById(1);
    expect(car).toBeUndefined();
  });
  it('should return undefined for a non-existing car', () => {
    const car = service.getCarById(999);
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
  it('should create multiple cars and return them', () => {
    const car1 = service.createCar({ make: 'BMW', model: 'X5', year: 2023, color: 'Black' });
    const car2 = service.createCar({ make: 'Audi', model: 'A4', year: 2023, color: 'Silver' });
    const cars = service.getAllCars();
    expect(cars.length).toBeGreaterThan(2);
    expect(cars.some(car => car.id === car1.id)).toBe(true);
    expect(cars.some(car => car.id === car2.id)).toBe(true);
  }
  );
  
  it('should not create a car with missing required fields', () => {
    expect(() => {
      service.createCar({ make: 'Missing Model', model: undefined , year: 2023, color: 'Green' }); 
    }).toThrow('Invalid car data');
  })
  it('should not create a car with invalid data', () => {
    expect(() => {
      service.createCar({ make: 'Invalid Car', model: 'Model', year: undefined, color: 'Blue' }); // Invalid year
    }).toThrow('Invalid car data');
  });

  it('should not update a car with invalid data', () => {
    const car = service.getCarById(1);
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


});
