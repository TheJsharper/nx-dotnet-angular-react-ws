import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { ApiExcludeController, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Response } from 'express';
import { CarsBadRequestExceptionData } from "../models/cars-bad-request.exception";
import { Car } from "../models/cars.models";
import { CarsService } from "../services/cars.service";
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
    status: HttpStatus.OK,
    description: 'Get a car by ID',
    type: Car,
  })
  @ApiResponse({
    status: 400,
    description: 'Car not found | invalid ID | bad request parameter not integer',
    type: CarsBadRequestExceptionData
  })

  async getCarById(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    return await Promise.resolve<Response>(this.carsService.getCarById(id, res));
  }

  @Post("/")
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'new car data is invalid',
    type: CarsBadRequestExceptionData
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create a new car',
    type: Car
  })

  async createCar(@Body() carData: Car, @Res() res: Response): Promise<Response> {
    const data = await this.carsService.createCar(carData);

    return Promise.resolve<Response>(res.status(HttpStatus.CREATED).json(data))

  }
  @Put("/:id")
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Car data is invalid',
    type: CarsBadRequestExceptionData
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update a car by ID',
    type: Car
  })
  async updateCar(@Param('id') id: string, @Body() carData: Car, @Res() res: Response): Promise<Response> {

    const updatedCar = await this.carsService.updateCar(Number(id), carData);

    return Promise.resolve<Response>(res.status(HttpStatus.OK).json(updatedCar))

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