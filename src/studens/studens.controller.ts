import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CreateStudentDto } from './dto/CreateStudent.dto';
import { StudentsService } from './studens.service';
import { UpdateStudentDto } from './dto/UpdateStudent.dto';
import { CreateStudentProfileDto } from './dto/CreateStudentProfile.dto';
import { CreateStudentCourseDto } from './dto/CreateStudentCourse.dto';

@Controller('students')
export class StudentsController {
    constructor(private studentService: StudentsService) { }

     //* Http Request Students
    @Get()
    getStudents() {
        return this.studentService.findStudents();
    }

    @Post()
    createStudent(@Body() createStudentDto: CreateStudentDto) {
        return this.studentService.createStudent(createStudentDto);
    }

    @Post('/:id')
    coursesOfStudent(@Body() id:number) {
        return this.studentService.coursesOfStudent(id);
    }

     //http://localhost:3000/students/number
    @Put('/:id')
    updateStudentById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateStudentDto: UpdateStudentDto
    ) {
        return this.studentService.updateStudent(id,updateStudentDto);
    }
    
     //http://localhost:3000/students/number
    @Delete('/:id')
    deleteStudentById(@Param('id',ParseIntPipe)id:number){
       return this.studentService.deleteStudent(id);
    }

    //* Http Request Profile
    //http://localhost:3000/students/number/profiles
    @Post(':id/profiles')
    createStudentProfile(
        @Param('id',ParseIntPipe) id:number,
        @Body() createStudentProfile:CreateStudentProfileDto
        ){
        return this.studentService.createUserProfile(id,createStudentProfile)
    }

    //* Http Request Courses
    //http://localhost:3000/students/number/courses
    @Post(':id/courses')
    createStudentCourse(
    @Param('id',ParseIntPipe)id:number,
    @Body() CreateStudentCourseDto:CreateStudentCourseDto
    ){
        return this.studentService.createStudentCourse(id,CreateStudentCourseDto) 
    }
}
