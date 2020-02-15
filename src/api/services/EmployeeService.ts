import { Service } from 'typedi';
import { Employee } from '../models/entities/Employee';
import { EmployeeRepository } from '../repositories/EmployeeRepository';
import GetEmployeesQuery from '../../lib/queryParam/GetEmployeesQuery';


@Service()
export class EmployeeService {

    private employeeRepository: EmployeeRepository

    constructor(employeeRepository: EmployeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public async findAll(query: GetEmployeesQuery): Promise<Employee[]> {
        const offset = (query.page_number - 1) * query.page_size;
        return this.employeeRepository.findAll(query.page_size, offset);
    }


    public findOne(id:number): Employee | undefined {
        if(id == 12){
            let employee:Employee = new Employee();
            employee.id = 12;
            return employee;
        }
        return undefined;
        
    }

}