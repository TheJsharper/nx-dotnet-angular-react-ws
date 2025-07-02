import { ApiProperty } from "@nestjs/swagger";

export class CarsBadRequestExceptionData {
    @ApiProperty({
        type: 'string',
        description: 'Error message describing the bad request',
        example: 'Invalid car data provided',
        required: true
    })
    message: string;
    @ApiProperty({
        type: 'string',
        description: 'Error code for the bad request',
        example: 'BAD_REQUEST',
        required: true
    })
    error: string;
    @ApiProperty({
        type: 'string',
        description: 'status of the HTTP request',
        example: '400 Bad Request',
        required: true
    })
    statusCode: number;
    @ApiProperty({
        type: 'string',
        description: 'Timestamp of when the error occurred',
        example: '2023-10-01T12:00:00Z',
        required: true
    })
    timestamp: string;
    @ApiProperty({
        type: 'string',
        description: 'Path of the request that caused the error',
        example: '/cars/123',
        required: true
    })
    path: string;
}





