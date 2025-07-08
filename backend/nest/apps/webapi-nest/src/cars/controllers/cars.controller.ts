import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { ApiExcludeController, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
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
    status: HttpStatus.OK,
    description: 'Get all cars',
    type: Array<Car>,
    isArray: true,
  })
  @ApiOperation({
    summary: 'Get all cars',
    description: 'Retrieves a list of all cars available in the system.',
    responses: {
      200: {
        description: 'List of cars retrieved successfully.',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Car'
              }
            }
          }
        }
      }

    },
    tags: ['Cars']
  })
  @Get("/")
  async getAllCars(): Promise<Car[]> {

    return await this.carsService.getAllCars();
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
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Car not found | invalid ID | bad request parameter not integer',
    type: CarsBadRequestExceptionData
  })
  async deleteCar(@Param('id') id: string, @Res() res: Response): Promise<Response<boolean>> {

    const result = await this.carsService.deleteCar(Number(id));

    return Promise.resolve(res.status(HttpStatus.OK).json(result));


  }

}   