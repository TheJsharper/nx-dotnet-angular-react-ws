import { Test, TestingModule } from '@nestjs/testing';

import { Response } from 'express';
import { createResponse, MockResponse } from 'node-mocks-http';
import { Car } from '../models/cars.models';
import { CarsService } from '../services/cars.service';
import { CarsController } from './cars.controller';
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


      const res = createResponse();

      const newLocal = { make: 'Toyota', model: 'Corolla', year: 2020, color: 'Blue' };

      const returnValueRes = await carsController.createCar(newLocal, res);

      const dataCars = (returnValueRes as MockResponse<Response<Car, Record<string, unknown>>>)._getJSONData();

      expect(returnValueRes).toBeDefined();

      expect(dataCars.id).toBeDefined();

      expect(dataCars).toStrictEqual({ ...newLocal, id: dataCars.id });

      const response: MockResponse<Response<unknown, Record<string, unknown>>> = (await carsController.getCarById(dataCars.id.toString(), res)) as MockResponse<Response<unknown, Record<string, unknown>>>;

      expect(response).toBeDefined();

      expect(response.statusCode).toBe(200);

      expect(response.getHeader('Content-Type')).toBe('application/json');

      expect(response._isJSON()).toBe(true);

    });

    it('should throw an error when car ID is invalid', async () => {
      const invalidCarId = 'invalid';

      await expect(async () => {
        try {
          const res = createResponse();

          await carsController.getCarById(invalidCarId, res);

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car ID- Car ID must be a number');
    });

    it('should throw an error when car ID does not exist', async () => {
      const nonExistentCarId = '9999'; // Assuming this ID does not exist

      await expect(async () => {
        try {
          const res = createResponse();

          await carsController.getCarById(nonExistentCarId, res);

        } catch (error) {

          throw new Error(error.message);
        }
      }).rejects.toThrow('Car not found with ID: 9999');
    });
    it('should throw an error when car ID is negative', async () => {
      const negativeCarId = '-1';

      await expect(async () => {
        try {
          const res = createResponse();

          await carsController.getCarById(negativeCarId, res);

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow(`Invalid car ID ${negativeCarId} - must be a positive number`);
    });
  });

  describe('createCar', () => {
    it('should create a new car Omiding Id', async () => {
      const newCar: Omit<Car, "id"> = { make: 'Toyota', model: 'Corolla', year: 2020, color: 'Blue' };

      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

      expect(newCar).toBeDefined();

      const carResponse: MockResponse<Response<Car, Record<string, unknown>>> = await carsController.createCar(newCar, res) as MockResponse<Response<Car, Record<string, unknown>>>;

      expect(carResponse).toBeDefined();

      const dataCars = carResponse._getJSONData();

      expect(dataCars).toBeDefined();

      expect(dataCars.id).toBeDefined();

      expect(dataCars).toStrictEqual({ ...newCar, id: dataCars.id });
    });

    it('should throw an error when creating a car with invalid data', async () => {
      const invalidCar: Omit<Car, "id" | "make"> = { model: 'Civic', year: 2019, color: 'Red' };

      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

      await expect(async () => {
        try {
          const result = await carsController.createCar(invalidCar as Omit<Car, 'id'>, res);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car data');
    });

    it('should throw an error when creating a car with missing properties', async () => {
      const invalidCar: Omit<Car, "id" | 'color'> = { make: 'Honda', model: 'Civic', year: 2019 }; // Missing color

      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

      await expect(async () => {
        try {
          const result = await carsController.createCar(invalidCar as Omit<Car, 'id'>, res);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car data');
    });

    it('should throw an error when creating a car with null properties', async () => {
      const invalidCar: Omit<Car, "id"> = { make: null, model: 'Civic', year: 2019, color: 'Red' }; // make is null

      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

      await expect(async () => {
        try {
          const result = await carsController.createCar(invalidCar as Omit<Car, 'id'>, res);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car data');
    });

    it('should throw an error when creating a car with invalid year', async () => {
      const invalidCar: Omit<Car, "id"> = { make: 'Honda', model: 'Civic', year: 1800, color: 'Red' }; // Invalid year

      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

      await expect(async () => {
        try {
          const result = await carsController.createCar(invalidCar as Omit<Car, 'id'>, res);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid year');
    });

    it('should throw an error when creating a car with invalid data types', async () => {

      const invalidCar: Omit<Car, "id"> = { make: 'Honda', model: 'Civic', year: 2020, color: 1 as unknown as string }; // Invalid color type

      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

      await expect(async () => {
        try {
          const result = await carsController.createCar(invalidCar as Omit<Car, 'id'>, res);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car data types');
    });

  });

  describe('updateCar', () => {


    it('should update a car by ID', async () => {
      const updatedCar: Car = { id: 1, make: 'Toyota', model: 'Camry', year: 2021, color: 'Black' };
      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();
      const carId = 1;

      const response = await carsController.updateCar(carId.toString(), updatedCar, res);

      const result = (response as MockResponse<Response<Car, Record<string, unknown>>>)._getJSONData();

      expect(result).toBeDefined();
      expect(result.id).toBe(carId);
      expect(result.make).toBe(updatedCar.make);
      expect(result.model).toBe(updatedCar.model);
      expect(result.year).toBe(updatedCar.year);
      expect(result.color).toBe(updatedCar.color);
    });

    it('should throw an error when updating a car with invalid data', async () => {
      const invalidUpdate: Car = { make: null, model: 'Civic', year: 2019, color: 'Red' }; // make is null
      const carId = 1;
      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();
      await expect(async () => {
        try {
          const result = await carsController.updateCar(carId.toString(), invalidUpdate, res);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car data');
    });

    it('should throw an error when updating a car with missing properties', async () => {
      const invalidUpdate: Partial<Car> = { make: 'Honda', model: 'Civic', year: 2019 }; // Missing color
      const carId = 1;

      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();
      await expect(async () => {
        try {
          const result = await carsController.updateCar(carId.toString(), invalidUpdate as Car, res);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car data');
    });

    it('should throw an error when updating a car with null properties', async () => {
      const invalidUpdate: Partial<Car> = { make: null, model: 'Civic', year: 2019, color: 'Red' }; // make is null
      const carId = 1;
      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

      await expect(async () => {
        try {
          const result = await carsController.updateCar(carId.toString(), invalidUpdate as Car, res);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car data');
    }
    );
    it('should throw an error when updating a car with invalid year', async () => {
      const invalidUpdate: Partial<Car> = { make: 'Honda', model: 'Civic', year: 1800, color: 'Red' }; // Invalid year
      const carId = 1;
      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

      await expect(async () => {
        try {
          const result = await carsController.updateCar(carId.toString(), invalidUpdate as Car, res);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid year');
    });
    it('should throw an error when updating a car with invalid data types', async () => {
      const invalidUpdate: Partial<Car> = { make: 'Honda', model: 'Civic', year: 2020, color: 1 as unknown as string }; // Invalid color type

      const carId = 1;
      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

      await expect(async () => {
        try {
          const result = await carsController.updateCar(carId.toString(), invalidUpdate as Car, res);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car data types');
    });

    it('should throw an error when updating a car with a different ID', async () => {

      const invalidUpdate: Partial<Car> = { id: 2, make: 'Honda', model: 'Civic', year: 2020, color: 'Red' }; // Trying to change ID

      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();
      const carId = 1;

      await expect(async () => {
        try {
          const result = await carsController.updateCar(carId.toString(), invalidUpdate as Car, res);

          return result;

        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Cannot change car ID');
    });
  })

  describe('deleteCar', () => {
    it('should delete a car by ID', async () => {


      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

      const newCar = await carsController.createCar({ make: 'Toyota', model: 'Corolla', year: 2020, color: 'Blue' }, res);

      expect(newCar).toBeDefined();

      const dataCars = (newCar as MockResponse<Response<Car, Record<string, unknown>>>)._getJSONData();

      const carId = dataCars.id;

      const response = await carsController.deleteCar(carId.toString(), res) as MockResponse<Response<boolean, Record<string, unknown>>>;

      expect(response).toBeDefined();
    });

    it('should throw an error when deleting a car with an invalid ID', async () => {
      const invalidCarId = 'invalid';
      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();
      await expect(async () => {
        try {
          await carsController.deleteCar(invalidCarId as unknown as string, res);
        } catch (error) {
          throw new Error(error);
        }
      }).rejects.toThrow('Invalid car ID');
    });
    it('should throw an error when deleting a car that does not exist', async () => {
      const nonExistentCarId = 9999; // Assuming this ID does not exist

      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();

      await expect(async () => {
        try {
          await carsController.deleteCar(nonExistentCarId.toString(), res);
        } catch (error) {
          throw new Error(error);
        }
      }).rejects.toThrow('it does NOT exist id');
    });

    it('should throw an error when deleting a car with a negative ID', async () => {
      const negativeCarId = -1;
      const res: MockResponse<Response<Car, Record<string, unknown>>> = createResponse();
      await expect(async () => {
        try {
          await carsController.deleteCar(negativeCarId.toString(), res);
        } catch (error) {
          throw new Error(error.message);
        }
      }).rejects.toThrow('Invalid car ID - must be a positive number');
    });
  });

});