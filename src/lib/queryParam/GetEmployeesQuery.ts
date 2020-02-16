import { IsPositive } from 'class-validator';
import GetBaseQuery from './GetBaseQuery';

enum EmployeeField {
    BirthDate = 'birthDate',
    FirstName = 'firstName',
    LastName = 'lastName',
    Gender = 'gender',
    HireDate = 'hireDate'
}

export default class GetEmployeesQuery extends GetBaseQuery {

    public  getSort_by_Formated(): Map<string, "ASC" | "DESC"> {
        let mapOrderBy: Map<string,"ASC" | "DESC"> = new Map<string,"ASC" | "DESC">();
        for(let s of this.sort_by){
            let keyValue = s.split(':');
            if(keyValue.length == 2) {
                const fieldName = GetEmployeesQuery.formatFieldName(keyValue[1])
                if (fieldName in EmployeeField) {
                    mapOrderBy.set(fieldName, keyValue[0] === 'desc' ? "DESC" : "ASC")
                }
                else {
                    throw new Error(keyValue[1] + " is not part of employee data")
                }
            }
            else {
                throw new Error(keyValue + " is not a valid sort string param !!")
            }
        }
        return mapOrderBy;
    }
}