import { Controller, Get, Post, Put, Delete, Body, Param, Res } from "@nestjs/common";
import { Car } from "../models/cars.models";
import { CarsService } from "../services/cars.service";
import { ApiExcludeController, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Response } from 'express';
import { CarsBadRequestExceptionData } from "../models/cars-bad-request.exception";
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
  @ApiResponse({
    status: 200,
    description: 'Get a car by ID',
    type: Car,
  })
  @ApiResponse({
    status: 400,
    description: 'Car not found | invalid ID | bad request parameter not integer',
    type: CarsBadRequestExceptionData
  })
  
  async getCarById(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    return await new Promise<Response>(
      (resolve) => {

        const car = this.carsService.getCarById(id, res);

        resolve(car);

      }
    );
  }

  @Post("/")
  @ApiResponse({
    status: 201,
    description: 'Create a new car',
    type: Car
  })

  async createCar(@Body() carData: Car): Promise<Car> {
    return await new Promise<Car>(
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
  async updateCar(@Param('id') id: string, @Body() carData: Car): Promise<Car> {
    return await new Promise<Car>(
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
  @ApiResponse({
    status: 200,
    description: 'Delete a car by ID',
    schema: {
      type: 'boolean',
      example: true,
    },
  })
  async deleteCar(@Param('id') id: string): Promise<boolean> {

    return await new Promise<boolean>((resolve, reject) => {
      this.carsService.deleteCar(Number(id))
        .then((value: boolean) => resolve(value))
        .catch((error) => reject(error.message));
    });
  }

}   