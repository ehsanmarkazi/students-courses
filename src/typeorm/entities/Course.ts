import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from 'src/typeorm/entities/Student';

@Entity({name:'courses'})
export class Course{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    name:string;

    @Column()
    createAt: Date;

    @ManyToOne(()=> Student,(student) => student.courses)
    student:Student;

}