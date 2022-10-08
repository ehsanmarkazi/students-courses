import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './courses.controller';
import { Course } from './../typeorm/entities/Course';
import { CoursesService } from './courses.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [TypeOrmModule.forFeature([Course]),PrismaModule],
controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule { }
