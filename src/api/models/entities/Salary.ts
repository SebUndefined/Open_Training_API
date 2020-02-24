import {
  GraphQLDate,
} from 'graphql-iso-date';
import { Entity, ManyToOne, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Employee } from './Employee';


@Entity({name: "salaries"})
@ObjectType()
export class Salary {
    @Field(type => ID)
    @ManyToOne(type => Employee, employee => employee.salaries, { primary: true })
    employee: Employee;
    @Field(type => GraphQLDate)
    @Column({ primary : true})
    fromDate: Date;
    @Field(type => GraphQLDate)
    @Column()
    toDate: Date;
    @Field()
    @Column()
    salary: number;
}