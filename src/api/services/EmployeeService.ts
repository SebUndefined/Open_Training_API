import { Service } from 'typedi';
import { Employee } from '../models/entities/Employee';
import { EmployeeRepository } from '../repositories/EmployeeRepository';
import GetEmployeesQuery from '../../lib/queryParam/GetEmployeesQuery';
import { OrderByCondition } from 'typeorm';
import { EmployeeDto } from '../models/dtos/EmployeeDto';
import { EmployeesArgs } from '../types/argsTypes/EmployeesArgs';


@Service()
export class EmployeeService {
    private employeeRepository: EmployeeRepository

    constructor(employeeRepository: EmployeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public async findAll(employeesArgs: EmployeesArgs) : Promise<Employee[]> {
        const offset = (employeesArgs.page_number - 1) * employeesArgs.page_size;
        let sorting : OrderByCondition = employeesArgs.getSort_by_Formated();
        const employees = await this.employeeRepository.findAll(employeesArgs.page_size, offset, sorting);
        return employees;
    }

    public async findById(id:number): Promise<Employee> | undefined {
        try {
            const employee : Promise<Employee> = this.employeeRepository.findByID(id);
            return employee;
        } catch(error) {
            throw new Error(error)
        }
    }

    // public async findAll(query: GetEmployeesQuery): Promise<EmployeeDto[]> {
    //     const offset = (query.page_number - 1) * query.page_size;
    //     // Build order by conditions
    //     let sorting : OrderByCondition = query.getSort_by_Formated();
    //     const employees = await this.employeeRepository.findAll(query.page_size, offset, sorting);
    //     let employeesDTOs = [];
    //     for(let emp of employees){
    //         const empDTO = new EmployeeDto('employee', emp.id, 
    //         { 
    //             birthDate: emp.birthDate,
    //             firstName: emp.firstName,
    //             lastName: emp.lastName,
    //             gender: emp.gender,
    //             hireDate: emp.hireDate,
    //         });
    //         employeesDTOs.push(empDTO);
    //     }
    //     return employeesDTOs;
    // }


    

}