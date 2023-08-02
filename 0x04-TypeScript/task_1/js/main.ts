import { Student } from './../../task_0/js/main';
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index:string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`
}

export interface _StudentClassContructor {
    new (firstName: string, lastName: string): _StudentClass;
}

export interface _StudentClass {
    workOnHomeWork(): string;
    displayName(): string;
}

export class StudentClass implements _StudentClass {
    private _firstName!: string;
    private _lastName!: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomeWork(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this._firstName
    }
}

export function createStudent(ctor: _StudentClassContructor, firstName: string,
    lastName: string): _StudentClass {
        return new ctor(firstName, lastName);
    }