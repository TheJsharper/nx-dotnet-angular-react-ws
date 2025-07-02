
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { CarsBadRequestExceptionData } from '../models/cars-bad-request.exception';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const payload = new CarsBadRequestExceptionData();
    payload.message = exception.message;
    payload.error = exception.name;
    payload.statusCode = status;
    payload.timestamp = new Date().toISOString();
    payload.path = request.url;



    response
      .status(status)
      .json(payload);
  }
}
