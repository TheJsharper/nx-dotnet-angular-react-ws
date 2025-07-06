
import { CarsController } from '../../../src/cars/controllers/cars.controller';
import { Car } from '../../../src/cars/models/cars.models';
import { CarsService } from '../../../src/cars/services/cars.service';
import { Test, TestingModule } from '@nestjs/testing';
import { createResponse, MockResponse } from 'node-mocks-http';
import { Response } from 'express';

describe('CarsController.create', () => {
  let carsController: CarsController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [CarsService],
    }).compile();

    carsController = module.get<CarsController>(CarsController);
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
      const invalidCar: Omit<Car, "id"> = { make: null as unknown as never, model: 'Civic', year: 2019, color: 'Red' }; // make is null

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

})