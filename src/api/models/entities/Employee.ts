import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity({name: "employees"})
export default class Employee {
    @PrimaryGeneratedColumn({ name: "emp_no"})
    public id: string;
}