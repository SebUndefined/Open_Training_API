import { Length, IsEnum } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import {
  GraphQLDate,
} from 'graphql-iso-date';
import { Salary } from './Salary';
import { Title } from './Title';

export enum Gender {
    Male = 'M',
    Female = 'F',
}


@Entity({name: "employees"})
@ObjectType()
export class Employee {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: number;
    @Column({ type: "date" } )
    @Field(type => GraphQLDate)
    birthDate: Date;
    @Column()
    @Length(2, 40)
    @Field()
    firstName: string;
    @Column()
    @Length(2, 40)
    @Field()
    lastName: string;
    @Column('text')
    @IsEnum(Gender)
    @Field()
    gender: Gender;
    @Column({ type: "date" } )
    @Field(type => GraphQLDate,{ nullable: false })
    hireDate: Date;
    // Relations
    @Field(() => [Salary], { nullable: true })
    @OneToMany(type => Salary, salary => salary.employee, { lazy: true })
    salaries: Salary[];
    @Field(() => [Title], { nullable: true })
    @OneToMany(type => Title, title => title.employee, { lazy: true })
    titles: Title[];
}