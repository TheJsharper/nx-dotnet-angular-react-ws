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


    it('should return "list of cars"', async () => {
      const cars = await carsController.getAllCars();
      expect(cars.length).toBeGreaterThan(0);
    });
  });