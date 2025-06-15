import { Test, TestingModule } from '@nestjs/testing';

import { CarsController } from './cars.controller';
import { CarsService } from '../services/cars.service';

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
});
