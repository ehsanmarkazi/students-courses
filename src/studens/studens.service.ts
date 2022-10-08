import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentParam, CreateStudentProfileParam, UpdateStudentParam, CreateCourseParam, CreateStudentCourseParam } from 'src/utils/types';
import { Repository } from 'typeorm';
import { Student } from './../typeorm/entities/Student';
import { Profile } from 'src/typeorm/entities/Profile';
import { Course } from './../typeorm/entities/Course';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentsService {
    constructor(
        // @InjectRepository(Student) private studentRepository: Repository<Student>,
        // @InjectRepository(Profile) private profileRepository: Repository<Profile>,
        // @InjectRepository(Course) private CourseRepository: Repository<Course>,
        private prisma: PrismaService
    ) { }

    findStudents() {
        //Without Prisma
        //return this.studentRepository.find({ relations: ['profile'] });
        return this.prisma.student.findMany({
            include: {
                Profile: true,
                courses: true
            }
        })
    };

    coursesOfStudent(id: number) {
        return this.prisma.students_courses.findMany({
            where: { id_student: id },

        })
    }

    createStudent(createStudentDetails: CreateStudentParam) {
        //Without Prisma
        // const newStudent = this.studentRepository.create({
        //     ...createStudentDetails,
        //     createAt: new Date(),
        // });
        // return this.studentRepository.save(newStudent);
        return this.prisma.student.create({
            data: {
                ...createStudentDetails,
                courses: {
                    connect: { id: 3 }
                }
            }

        });
    }

    updateStudent(id: number, updateStudentDetails: UpdateStudentParam) {
        //Without Prisma
        // return this.studentRepository.update({ id }, { ...UpdateStudentDetails })
        return this.prisma.student.update({
            where: {
                id
            },
            data: {
                ...updateStudentDetails
            }
        })
    }



    deleteStudent(id: number) {
        //Without Prisma
        // return this.studentRepository.delete({ id });
        return this.prisma.student.delete({ where: { id } });
    }

    //* Profile

    async createUserProfile(
        id: number,
        createStudentProfileDetails: CreateStudentProfileParam
    ) {
        //const user = await this.studentRepository.findOneBy({ id })
        const student = await this.prisma.student.findUnique({ where: { id } })

        if (!student) throw new HttpException(
            'user not found! cannot create profile',
            HttpStatus.BAD_REQUEST);
        //Without Prisma
        // const newProfile = this.profileRepository.create(createStudentProfileDetails);
        // const savedProfile = await this.profileRepository.save(newProfile);
        // user.profile = savedProfile;
        // return this.studentRepository.save(user);

        return this.prisma.profile.create({
            data: {
                ...createStudentProfileDetails,
                user: {
                    connect: { id }
                }
            },



        })


    }

    async createStudentCourse(
        id: number,
        createStudentCourseDetails: CreateStudentCourseParam
    ) {
        //const student = await this.studentRepository.findOneBy({ id })
        const student = await this.prisma.student.findUnique({ where: { id } })
        if (!student) throw new HttpException(
            'user not found! cannot create profile',
            HttpStatus.BAD_REQUEST,
        );
        //Without Prisma

        // const newRegisterCourse = this.CourseRepository.create({
        //     ...createCourseDetails,
        //     createAt: new Date(),
        //     student,
        // });
        // return this.CourseRepository.save(newRegisterCourse);
        return this.prisma.course.create({
            data: {
                ...createStudentCourseDetails,
                students: {
                    connect: { id }
                }
            }

        })

    }


}
