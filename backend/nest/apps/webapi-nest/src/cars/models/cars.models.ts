import { ApiProperty } from "@nestjs/swagger";

export class Car {
  @ApiProperty({
    type: 'number',
    description: 'Unique identifier for the car',
    example: 1,
    required: false
  })
  id?: number;
  @ApiProperty({
    type: 'string',
    description: 'Make of the car',
    example: 'Toyota',
    required: true
  })
  make: string;
  @ApiProperty({
    type: 'string',
    description: 'Model of the car',
    example: 'Camry',
    required: true
  })
  model: string;
  @ApiProperty({
    type: 'number',
    description: 'Year of manufacture',
    example: 2020,
    required: true
  })  
  year: number;
  @ApiProperty({
    type: 'string',
    description: 'Price of the car',
    example: "red | blue | green| black | white | yellow | silver | gray",
    required: true
  })
  color: string;
}