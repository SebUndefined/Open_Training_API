import { Service } from 'typedi';
import { Employee } from '../models/entities/Employee';
import { EmployeeRepository } from '../repositories/EmployeeRepository';
import GetEmployeesQuery from '../../lib/queryParam/GetEmployeesQuery';
import { OrderByCondition } from 'typeorm';
import { EmployeeDto } from '../models/dtos/EmployeeDto';


@Service()
export class EmployeeService {
    private employeeRepository: EmployeeRepository

    constructor(employeeRepository: EmployeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public async findAllEmployees(arg0: { page_number: number; page_size: number; }) : Promise<Employee[]> {
        let sorting : Map<string, "ASC" | "DESC"> = new Map<string, "ASC" | "DESC">();
        const offset = (arg0.page_number - 1) * arg0.page_size;
        const employees = await this.employeeRepository.findAll(arg0.page_size, offset, sorting);
        return employees;
      }

    public async findAll(query: GetEmployeesQuery): Promise<EmployeeDto[]> {
        const offset = (query.page_number - 1) * query.page_size;
        // Build order by conditions
        let sorting : Map<string, "ASC" | "DESC"> = query.getSort_by_Formated();
        const employees = await this.employeeRepository.findAll(query.page_size, offset, sorting);
        let employeesDTOs = [];
        for(let emp of employees){
            const empDTO = new EmployeeDto('employee', emp.id, 
            { 
                birthDate: emp.birthDate,
                firstName: emp.firstName,
                lastName: emp.lastName,
                gender: emp.gender,
                hireDate: emp.hireDate,
            });
            employeesDTOs.push(empDTO);
        }
        return employeesDTOs;
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