import { Controller } from "@nestjs/common";
import { Car } from "../models/cars.models";
import { CarsService } from "../services/cars.service";

@Controller('cars')
export class CarsController {

  constructor(private readonly carsService: CarsService) {
  }
  getAllCars(): Promise<Car[]> {
    return new Promise<Car[]>(
      (resolve, reject) => {
        try {
          const cars = this.carsService.getAllCars();
          resolve(cars);
        } catch (error) {
          reject(error);
        }
      }
    );
  }

  getCarById(id: string): Promise<Car | undefined> {
    return new Promise<Car | undefined>(
      (resolve, reject) => {
        try {
          const car = this.carsService.getCarById(Number(id));
          resolve(car);
        } catch (error) {
          reject(error);
        }
      }
    );
  }

  createCar(carData: Omit<Car, "id">): Promise<Car> {
    return new Promise<Car>(
      (resolve, reject) => {
        try {
          const updateNewCar = this.carsService.createCar(carData);
          resolve(updateNewCar);
        } catch (error) {
          reject(error);
        }
      }
    );

  }
}   