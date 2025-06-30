import { Test, TestingModule } from '@nestjs/testing';

import { CarsController } from './cars.controller';
import { CarsService } from '../services/cars.service';
import { Car } from '../models/cars.models';

describe('CarsController', () => {
  let carsController: CarsController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [CarsService],
    }).compile();

    carsController = module.get<CarsController>(CarsController);
  });

  describe('getCars', () => {
    it('should return "list of cars"', async () => {
      const cars = await carsController.getAllCars();
      expect(cars.length).toBeGreaterThan(0);
    });
  });

  describe('getCarById', () => {
    it('should return a car by ID', async () => {
      const car = await carsController.getCarById(1);
      expect(car).toBeDefined();
    });
  });

  describe('createCar', () => {
    it('should create a new car Omiding Id', async () => {
      const newCar: Omit<Car, "id"> = { make: 'Toyota', model: 'Corolla', year: 2020, color: 'Blue' };

      expect(newCar).toBeDefined();

      const createdCar = await carsController.createCar(newCar);

      expect(createdCar).toBeDefined();

      expect(createdCar.id).toBeDefined();

      expect(createdCar).toStrictEqual({ ...newCar, id: createdCar.id });
    });

    it('should throw an error when creating a car with invalid data', async () => {
      const invalidCar: Omit<Car, "id" | "make"> = { model: 'Civic', year: 2019, color: 'Red' };

      await expect(async () => {
        try {
          const result = await carsController.createCar(invalidCar as Omit<Car, 'id'>);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car data');
    });

    it('should throw an error when creating a car with missing properties', async () => {
      const invalidCar: Omit<Car, "id" | 'color'> = { make: 'Honda', model: 'Civic', year: 2019 }; // Missing color

      await expect(async () => {
        try {
          const result = await carsController.createCar(invalidCar as Omit<Car, 'id'>);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car data');
    });

    it('should throw an error when creating a car with null properties', async () => {
      const invalidCar: Omit<Car, "id"> = { make: null, model: 'Civic', year: 2019, color: 'Red' }; // make is null

      await expect(async () => {
        try {
          const result = await carsController.createCar(invalidCar as Omit<Car, 'id'>);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car data');
    });

    it('should throw an error when creating a car with invalid year', async () => {
      const invalidCar: Omit<Car, "id"> = { make: 'Honda', model: 'Civic', year: 1800, color: 'Red' }; // Invalid year

      await expect(async () => {
        try {
          const result = await carsController.createCar(invalidCar as Omit<Car, 'id'>);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid year');
    });

    it('should throw an error when creating a car with invalid data types', async () => {

      const invalidCar: Omit<Car, "id"> = { make: 'Honda', model: 'Civic', year: 2020, color: 1 as unknown as string }; // Invalid color type


      await expect(async () => {
        try {
          const result = await carsController.createCar(invalidCar as Omit<Car, 'id'>);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car data types');
    });

  });

});