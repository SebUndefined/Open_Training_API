import { ArgsType, Field, Int } from "type-graphql";
import { Min, Max } from 'class-validator';
import { OrderBy, OrderByScalar } from '../../../lib/scalar/CustomScalarList';

@ArgsType()
export class EmployeesArgs {
  @Field(type => Int)
  @Min(0)
  page_number: number = 1;
  @Field(type => Int)
  @Min(1)
  @Max(50)
  page_size: number = 25;
  @Field(type => OrderByScalar)
  order_by: OrderBy[] = []
}