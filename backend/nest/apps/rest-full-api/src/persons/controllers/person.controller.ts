import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PersonService } from '../services/person.service';
import { PersonDto } from '../dtos/person.request.dto';

@Controller('persons  ')
export class PersonController {
    constructor(private personsService: PersonService) { }

    @Get()
    getPerson() {
        return this.personsService.getPerson();
    }

    // findOne(@Param('id') id: string):  PersonD{
    @Get(':id')
    getClassName_singular(@Param('id') id: string): PersonDto {
        return this.personsService.getPersonById(id);
    }

    @Post()
    createClassName_singular(@Body() className_singular: PersonDto) {
        this.personsService.createPerson(className_singular);
    }

    @Put()
    updateClassName_singular(@Body() className_singular: PersonDto) {
        this.personsService.updatePerson(className_singular);
    }

    /**
      * Delete className_singular
      * @param id
      */
    @Delete()
    deleteClassName_singular(@Param('id') id: string) {
        this.personsService.deletePerson(id);
    }
}
