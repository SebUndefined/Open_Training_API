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

    public async findAll(limit: number, offset:number, sorting: Map<string, "ASC" | "DESC">): Promise<Employee[]> {
        const query = this.entityManager.createQueryBuilder(Employee, 'emp');
        query.limit(limit).offset(offset)
        let i = 1;
        console.log(sorting)
        sorting.forEach((value, key, map) => {
            if(i == 1){
                query.orderBy(key, value)
            }
            else {
                query.addOrderBy(key, value)
            }
            i++;
        })
        return query.getMany();
    }
    
}