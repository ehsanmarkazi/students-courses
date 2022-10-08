import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseParam, UpdateCourseParam } from 'src/utils/types';
import { Repository } from 'typeorm';
import { Course } from './../typeorm/entities/Course';

@Injectable()
export class CoursesService {
    constructor(
        //Without Prisma
        @InjectRepository(Course) private courseRepository: Repository<Course>,
        //Without Prisma
        private prisma: PrismaService
    ) { }

    getCourses() {
           //Without Prisma
        //return this.courseRepository.find();
        return this.prisma.course.findMany()
    }




    createCourse(creteCourseParam: CreateCourseParam) {
           //Without Prisma
        // const newCourse = this.courseRepository.create({
        //     ...creteCourseParam,
        //     createAt: new Date(),
        // });
        // return this.courseRepository.save(newCourse);
        return this.prisma.course.create({
            data: { ...creteCourseParam }
        });
    }


    updateCourseById(id: number, updateCourseParam: UpdateCourseParam) {
           //Without Prisma
        // return this.courseRepository.update({id} , {...updateCourseParam});
        return this.prisma.course.update({
            where: {
                id
            },
            data: {
                ...updateCourseParam
            }
        })
    }
    deleteCourseById(id: number) {
           //Without Prisma
        //return this.courseRepository.delete(id);
        return this.prisma.course.delete({ where: { id } })
    }
}
