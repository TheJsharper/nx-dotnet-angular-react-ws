import { Module } from "@nestjs/common";
import { CarsController } from "./controllers/cars.controller";
import { CarsService } from "./services/cars.service";

@Module({
    imports: [],  
    controllers: [CarsController],    
    providers: [CarsService],  
    exports: [],
})
export class CarsModule {
  // This module is currently empty, but can be expanded with controllers, providers, and imports as needed.
}