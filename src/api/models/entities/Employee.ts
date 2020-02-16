import { Length, IsEnum } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import {
  GraphQLDate,
} from 'graphql-iso-date';

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
}