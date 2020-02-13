import { Service } from 'typedi';
import Employee from '../models/entities/Employee';


@Service()
export class EmployeeService {

    public findOne(id:number): Employee | undefined {
        if(id == 12){
            let employee:Employee = new Employee();
            employee.id = 12;
            return employee;
        }
        return undefined;
        
    }

}