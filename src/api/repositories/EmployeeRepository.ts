import {Service} from "typedi";
import {EntityManager, OrderByCondition} from "typeorm";
import {InjectManager} from "typeorm-typedi-extensions";
import { Employee } from '../models/entities/Employee';

@Service()
export class EmployeeRepository {

    private entityManager: EntityManager

    constructor(@InjectManager() entityManager: EntityManager) {
        this.entityManager = entityManager
    }

    public async findAll(limit: number, offset:number, orderBy: OrderByCondition): Promise<Employee[]> {
        const query = this.entityManager.createQueryBuilder(Employee, 'employees');
        query.limit(limit).offset(offset)
        let i = 1;
        query.orderBy(orderBy);
        
        return query.getMany();
    }

    public async findByID(id: number): Promise<Employee> {
        const query = this.entityManager.createQueryBuilder(Employee, 'employees');
        query.where("id = :id", {id: id});
        const employee : Promise<Employee> = query.getOne();
        return employee;
    }
    
}