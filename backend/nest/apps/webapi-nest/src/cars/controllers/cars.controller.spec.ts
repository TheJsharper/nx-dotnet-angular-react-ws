import { Test, TestingModule } from '@nestjs/testing';

import { CarsController } from './cars.controller';
import { CarsService } from '../services/cars.service';
import { Car } from '../models/cars.models';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [CarsService],
    }).compile();
  });


  describe('getCars', () => {
    it('should return "list of cars"', async () => {
      const appController = app.get<CarsController>(CarsController);
      const cars = await appController.getAllCars();
      expect(cars.length).toBeGreaterThan(0);
    });
  });
  describe('getCarById', () => {
    it('should return a car by ID', async () => {
      const appController = app.get<CarsController>(CarsController);
      const car = await appController.getCarById(1);
      expect(car).toBeDefined();

    });
  });
  describe('createCar', () => {
    it('should create a new car Omiding Id', async () => {
      const appController = app.get<CarsController>(CarsController);

      const newCar: Omit<Car, "id"> = { make: 'Toyota', model: 'Corolla', year: 2020, color: 'Blue' };

      expect(newCar).toBeDefined();

      const createdCar = await appController.createCar(newCar);

      expect(createdCar).toBeDefined();

      expect(createdCar.id).toBeDefined();

      expect(createdCar).toStrictEqual({ ...newCar, id: createdCar.id });


    });
    it('should throw an error when creating a car with invalid data', async () => {

      const appController = app.get<CarsController>(CarsController);

      const invalidCar: Omit<Car, "id" | "make"> = { model: 'Civic', year: 2019, color: 'Red' };    

      await expect(async () => {
        try {
          const result = await appController.createCar(invalidCar as Omit<Car, 'id'>);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car data');

    });
  });


});
