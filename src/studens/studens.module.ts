import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { Student } from 'src/typeorm/entities/Student';
import { StudentsController } from './studens.controller';
import { StudentsService } from './studens.service';
import { Course } from './../typeorm/entities/Course';


@Module({
  imports: [TypeOrmModule.forFeature([Student, Profile, Course])],
controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudensModule { }
