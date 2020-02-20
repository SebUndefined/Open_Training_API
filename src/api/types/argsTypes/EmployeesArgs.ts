import { ArgsType, Field, Int } from "type-graphql";
import { Min, Max } from 'class-validator';
import { OrderByConditionGraphQL } from '../../../lib/scalar/CustomScalarList';

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
  order_by: OrderByConditionGraphQL[];
}