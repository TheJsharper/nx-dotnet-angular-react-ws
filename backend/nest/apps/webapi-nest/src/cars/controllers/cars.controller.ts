import { Controller, Get, Post, Put, Delete, Body } from "@nestjs/common";
import { Car } from "../models/cars.models";
import { CarsService } from "../services/cars.service";
import { ApiExcludeController, ApiResponse, ApiTags } from "@nestjs/swagger";
@ApiTags('Cars')
@Controller('api/cars')
@ApiExcludeController(false)
export class CarsController {

  constructor(private readonly carsService: CarsService) {
  }
  @ApiResponse({
    status: 200,  
    description: 'Get all cars',
    type: Array<Car>,
  })
  @Get("/")
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

  @Get("/:id")
  getCarById(id: number): Promise<Car> {
    return new Promise<Car | undefined>(
      (resolve, reject) => {
        try {
          const car = this.carsService.getCarById(id);
          resolve(car);
        } catch (error) {
          reject(error);
        }
      }
    );
  }

  @Post("/")
  @ApiResponse({
    status: 201,
    description: 'Create a new car',
    type: Car
  })

  createCar(@Body() carData: Car): Promise<Car> {
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
  @Put("/:id")
  updateCar(id: string, carData: Partial<Car>): Promise<Car> {
    return new Promise<Car>(
      (resolve, reject) => {
        try {
          const updatedCar = this.carsService.updateCar(Number(id), carData);
          resolve(updatedCar);
        } catch (error) {
          reject(error);
        }
      }
    );
  }
  @Delete("/:id")
  deleteCar(id: string): Promise<void> {
    return new Promise<void>(
      (resolve, reject) => {
        try {
          this.carsService.deleteCar(Number(id));
          resolve();
        } catch (error) {
          reject(error);
        }
      }
    );
  }

}   