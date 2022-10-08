import { Controller, Get, Post, Put, Delete, Body,Param,ParseIntPipe, Patch } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/CreateCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) { }

    @Get()
    getAllCourses() {
        return this.coursesService.getCourses()
     }


    @Post()
    createCourse(@Body() createCourseDto: CreateCourseDto) {
        return this.coursesService.createCourse(createCourseDto);
    }



    @Patch('/:id')
    updateCourseById(
        @Param('id',ParseIntPipe) id:number,
        @Body() updateCourseDto:UpdateCourseDto
    ) { 
        return this.coursesService.updateCourseById(id,updateCourseDto)
    }

    

    @Delete('/:id')
    deleteCourse(@Param('id',ParseIntPipe)id:number) { 
        return this.coursesService.deleteCourseById(id);
    }

}
