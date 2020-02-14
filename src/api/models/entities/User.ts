import { Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import * as bcrypt from "bcrypt";
import { Role } from './Role';


@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    @Length(4, 20)
    username: string;
    @Column()
    @Length(2, 40)
    firstName: string;
    @Column()
    @Length(2, 40)
    lastName: string;
    @Column({type: "date"})
    birthDate: Date;
    @Column()
    @Length(10, 150)
    password: string;
    @Column({nullable: true})
    token: string;
    @Column({type: "date"})
    @CreateDateColumn()
    createdAt: Date;
    @Column({type: "date", nullable: true})
    @UpdateDateColumn()
    updatedAt: Date;
    @ManyToMany(type => Role, role => role.users)
    @JoinTable()
    roles: Role[];

    hashPassword() {
        const saltRounds = +process.env.SALT_ROUND;
        this.password = bcrypt.hashSync(this.password, saltRounds);
    }
    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string): boolean {
        return bcrypt.compareSync(unencryptedPassword, this.password);
      }
}