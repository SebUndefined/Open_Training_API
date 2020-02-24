import { ObjectType, ID, Resolver, Query, Arg, Args, Mutation, Authorized, Ctx, InputType, ArgsType, Int } from "type-graphql";
import { Field } from 'type-graphql';
import { MaxLength, Length, ArrayMaxSize, Min, Max } from 'class-validator';
import { Employee } from '../models/entities/Employee';
import { EmployeeService } from '../services/EmployeeService';
import { Service } from 'typedi';
import { EmployeesArgs } from '../types/argsTypes/EmployeesArgs';



@Service()
@Resolver(Employee)
export class EmployeeResolver {
    private employeeService: EmployeeService;
    constructor(employeeService: EmployeeService) {
        this.employeeService = employeeService;
    }

  
    @Query(returns => [Employee])
    employees(@Args() employeesArgs: EmployeesArgs) {
        const employees = this.employeeService.findAll(employeesArgs);
        return employees;
        
    }

    @Query(returns => Employee)
    async employee(@Arg("id") id: number) {
        const employee = await this.employeeService.findById(id);
        console.log(employee)
        if (employee === undefined) {
            console.log("test")
            return null;
        }
        return employee;
    }

//   @Mutation(returns => Recipe)
//   @Authorized()
//   addRecipe(
//     @Arg("newRecipeData") newRecipeData: NewRecipeInput,
//     @Ctx("user") user: User,
//   ): Promise<Recipe> {
//     return this.recipeService.addNew({ data: newRecipeData, user });
//   }

//   @Mutation(returns => Boolean)
//   //@Authorized(Roles.Admin)
//   async removeRecipe(@Arg("id") id: string) {
//     try {
//       await this.recipeService.removeById(id);
//       return true;
//     } catch {
//       return false;
//     }
//   }
}


@InputType()
class NewRecipeInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @Length(30, 255)
  description?: string;

  @Field(type => [String])
  @ArrayMaxSize(30)
  ingredients: string[];
}

