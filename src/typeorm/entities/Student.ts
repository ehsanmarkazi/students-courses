import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Profile } from './Profile';
import { Course } from './Course';

@Entity()
export class Student {

    @PrimaryGeneratedColumn({type:"bigint"})
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ nullable: false })
    password: string

    @Column()
    createAt: Date;


    @Column({ nullable: true })
    authStrategy: string;

    @OneToOne(()=>Profile)
    @JoinColumn()
    profile:Profile;

    @OneToMany(()=>Course,(course)=>course.student)
   courses:Course[];


}