import {Service} from "typedi";
import {EntityManager} from "typeorm";
import {InjectManager} from "typeorm-typedi-extensions";
import { Employee } from '../models/entities/Employee';

@Service()
export class EmployeeRepository {
    
    private entityManager: EntityManager

    constructor(@InjectManager() entityManager: EntityManager) {
        this.entityManager = entityManager
    }

    public async findAll(limit: number, offset:number): Promise<Employee[]> {
        return this.entityManager.createQueryBuilder(Employee, 'emp')
                                    .limit(limit)
                                    .offset(offset)
                                    .getMany();
    }
    
}