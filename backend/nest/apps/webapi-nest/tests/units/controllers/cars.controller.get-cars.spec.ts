import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from '../../../src/cars/controllers/cars.controller';
import { CarsService } from '../../../src/cars/services/cars.service';


describe('getCars', () => {
  let carsController: CarsController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [CarsService],
    }).compile();

    carsController = module.get<CarsController>(CarsController);
  });

  it('should be defined', () => {
    expect(carsController).toBeDefined();
  });

  it('should return "list of cars"', async () => {
    const cars = await carsController.getAllCars();

    expect(cars.length).toBeGreaterThan(0);
  });

  it('should return an array of cars', async () => {
    const cars = await carsController.getAllCars();

    expect(Array.isArray(cars)).toBe(true);
  });

  it('should return a car with the expected properties', async () => {
    const cars = await carsController.getAllCars();

    expect(cars.length).toBeGreaterThan(0);

    const car = cars[0];

    expect(car).toHaveProperty('id');

    expect(car).toHaveProperty('make');

    expect(car).toHaveProperty('model');

    expect(car).toHaveProperty('year');

    expect(car).toHaveProperty('color');
  });

  it('should return a car with valid year', async () => {
    const cars = await carsController.getAllCars();

    expect(cars.length).toBeGreaterThan(0);

    const car = cars[0];

    expect(car.year).toBeGreaterThanOrEqual(1886); // The first car was invented in 1886

    expect(car.year).toBeLessThanOrEqual(new Date().getFullYear()); // Year should not be in the future

  });

  it('should return a car with valid make and model', async () => {
    const cars = await carsController.getAllCars();

    expect(cars.length).toBeGreaterThan(0);

    const car = cars[0];

    expect(typeof car.make).toBe('string');

    expect(typeof car.model).toBe('string');

    expect(car.make.length).toBeGreaterThan(0);

    expect(car.model.length).toBeGreaterThan(0);
  });
  
  it('should return a car with valid color', async () => {
    const cars = await carsController.getAllCars();

    expect(cars.length).toBeGreaterThan(0);

    const car = cars[0];

    expect(typeof car.color).toBe('string');

    expect(car.color.length).toBeGreaterThan(0);
  });
});