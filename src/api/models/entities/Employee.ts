import { Length, IsEnum } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Gender {
    Male = 'M',
    Female = 'F',
  }

@Entity({name: "employees"})
export class Employee {
    @PrimaryGeneratedColumn( { name: "emp_no" } )
    id: number;
    @Column( { name: 'birth_date', type: "date" } )
    birthDate: Date;
    @Column({ name: 'first_name' } )
    @Length(2, 40)
    firstName: string;
    @Column({ name: 'last_name' } )
    @Length(2, 40)
    lastName: string;
    @Column('text')
    @IsEnum(Gender)
    gender: Gender;
    @Column({ name: 'hide_date' } )
    hireDate: Date;
}