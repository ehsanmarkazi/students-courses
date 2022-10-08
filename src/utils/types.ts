//Students:
export type CreateStudentParam = {
    userName: string,
    password: string,
    authStrategy: string
}

export type UpdateStudentParam = {
    userName: string,
    password: string,
    authStrategy: string
}

export type CreateStudentProfileParam = {
    firstName: string;
    lastName: string;
    user:string
    age: number;
    student: number;
}

export type CreateStudentCourseParam = {
    name:string;
   
}
//Courses
export type CreateCourseParam = {
    name: string;
}

export type UpdateCourseParam = {
    name: string;
}
