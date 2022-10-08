import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './typeorm/entities/Student';
import { StudensModule } from './studens/studens.module';
import { Profile } from './typeorm/entities/Profile';
import { CoursesModule } from './courses/courses.module';
import { Course } from './typeorm/entities/Course';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345678',
    database: 'student_course',
    entities: [Student, Profile, Course],
    synchronize: true
  }), StudensModule, CoursesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
