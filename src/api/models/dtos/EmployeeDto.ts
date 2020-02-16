import { BaseDto } from "./BaseDto";
import { LinkDto } from './LinkDto';

export class EmployeeDto extends BaseDto {
    attributes : {
        birthDate: Date;
        firstName: string;
        lastName: string;
        gender: string;
        hireDate: Date;
    };
    links: LinkDto[];

    constructor(type: string, id:number, attributes:any) {
        super(type, id);
        this.attributes = attributes;
        this.createLinks(id)
    }

    private createLinks(id: number) {
        this.links = [];
        this.links.push(new LinkDto('/employees/' + id, 'self' , 'GET'))
        this.links.push(new LinkDto('/employees/' + id, 'update_user' , 'UPDATE'))
        this.links.push(new LinkDto('/employees/' + id, 'delete_user' , 'DELETE'))
    }
}