import { IsPositive } from 'class-validator';
import GetBaseQuery from './GetBaseQuery';
import { OrderByCondition } from 'typeorm';

enum EmployeeField {
    BirthDate = 'birthDate',
    FirstName = 'firstName',
    LastName = 'lastName',
    Gender = 'gender',
    HireDate = 'hireDate'
}

export default class GetEmployeesQuery extends GetBaseQuery {

    public  getSort_by_Formated(): OrderByCondition {
        let mapOrderBy: OrderByCondition;
        const output = this.sort_by.reduce((acc: any, a: any) => 
            acc[a.field] = {}
        , {})
        console.log(output)  
        return mapOrderBy;
    }
}