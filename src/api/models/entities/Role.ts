import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { User } from './User';


@Entity({name: "roles"})
export class Role {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @ManyToMany(type => User, user => user.roles)
    users: User[];
}