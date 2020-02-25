import {Service} from "typedi";
import {EntityManager, OrderByCondition, Repository, EntityRepository, AbstractRepository} from "typeorm";
import {InjectManager, InjectRepository} from "typeorm-typedi-extensions";
import { Employee } from '../models/entities/Employee';

@Service()
@EntityRepository(Employee)
export class EmployeeRepository extends AbstractRepository<Employee>{

    public findAll(skip: number, take: number, orderBy: OrderByCondition) : Promise<Employee[]> {
        return this.repository.find({
            skip: skip,
            take: take,
            order: orderBy
        });
    }

    public findOneById(id: number): Promise<Employee> {
        return this.repository.findOne({id: id});
    }

    
}