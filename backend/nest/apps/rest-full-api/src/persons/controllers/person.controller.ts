import { Controller, Get, Param, Post, Body, Put, Delete, ParseUUIDPipe } from '@nestjs/common';
import { PersonService } from '../services/person.service';
import { PersonDto } from '../dtos/person.request.dto';
import { EnhancedParseUUIDPipe } from '../../exceptions/exance-parseUUIDPipe';

@Controller('persons  ')
export class PersonController {
    constructor(private personsService: PersonService) { }

    @Get()
    getPerson() {
        return this.personsService.getPerson();
    }

    // findOne(@Param('id') id: string):  PersonD{
    @Get(':id')
    getPersonById(@Param('id', new EnhancedParseUUIDPipe()) id: string): PersonDto {
        return this.personsService.getPersonById(id);
    }

    @Post()
    createClassName_singular(@Body() personDto: PersonDto) {
        this.personsService.createPerson(personDto);
    }

    @Put()
    updateClassName_singular(@Body() personDto: PersonDto) {
        this.personsService.updatePerson(personDto);
    }

    /**
      * Delete className_singular
      * @param id
      */
    @Delete()
    deleteClassName_singular(@Param('id', new EnhancedParseUUIDPipe()) id: string) {
        this.personsService.deletePerson(id);
    }
}
