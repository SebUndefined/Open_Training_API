import { Entity, ManyToOne, Column } from 'typeorm';
import { Field, ObjectType, ID } from 'type-graphql';
import { Employee } from './Employee';
import { GraphQLDate } from 'graphql-iso-date';

@Entity({name: "titles"})
@ObjectType()
export class Title {
    @Field(type => ID)
    @ManyToOne(type => Employee, employee => employee.titles, { primary: true })
    employee: Employee;
    @Field()
    @Column({primary: true, length: 50})
    title: string;
    @Field(type => GraphQLDate)
    @Column({ primary : true})
    fromDate: Date;
    @Field(type => GraphQLDate)
    @Column()
    toDate: Date;
}