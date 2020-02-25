import { ArgsType, Field, Int } from "type-graphql";
import { Min, Max } from 'class-validator';
import { OrderByConditionGraphQL } from '../../../lib/scalar/CustomScalarList';
import { OrderByCondition } from 'typeorm';
import { EmployeeField } from '../enumFields/EnumFields';




@ArgsType()
export class EmployeesArgs {
    @Field(type => Int)
    @Min(0)
    page_number: number = 1;
    @Field(type => Int)
    @Min(1)
    @Max(50)
    page_size: number = 25;
    @Field(type => [OrderByConditionGraphQL])
    order_by: OrderByConditionGraphQL[] = [];

    public  getSort_by_Formated(): OrderByCondition {
        let mapOrderBy: OrderByCondition = {};
        for(let od of this.order_by) {
            let key = od.field;
            mapOrderBy[key] = od.direction;
            // if(!od.field.startsWith("employees.")) {
            //     key = 'employees.' + key;
            // }
            // if(Object.values(EmployeeField).some((v) => v === key)){
            //     mapOrderBy[key] = od.direction;
            // }
            // else {
            //     throw new Error("We cannot use field " + key + " for sorting employees");
            // }
        }
        return mapOrderBy;
    }
}