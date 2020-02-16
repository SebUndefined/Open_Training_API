import { ObjectType, ID, Resolver, Query, Arg, Args, Mutation, Authorized, Ctx, InputType, ArgsType, Int } from "type-graphql";
import { Field } from 'type-graphql';
import { MaxLength, Length, ArrayMaxSize, Min, Max } from 'class-validator';
import { Employee } from '../models/entities/Employee';
import { EmployeeService } from '../services/EmployeeService';
import { Service } from 'typedi';

@ArgsType()
class EmployeesArgs {
  @Field(type => Int)
  @Min(0)
  page_number: number = 1;

  @Field(type => Int)
  @Min(1)
  @Max(50)
  page_size: number = 25;
}


@Resolver(Employee)
@Service()
export class EmployeeResolver {
  private employeeService: EmployeeService;
  constructor(employeeService: EmployeeService) {
    this.employeeService = employeeService;
  }

  // @Query(returns => Employee)
  // async recipe(@Arg("id") id: string) {
  //   const recipe = await this.employeeService.findById(id);
  //   if (recipe === undefined) {
  //     console.log("pouet")
  //   }
  //   return recipe;
  // }

  @Query(returns => [Employee])
  employees(@Args() { page_number, page_size }: EmployeesArgs) {
    try {
      const employees = this.employeeService.findAllEmployees({ page_number, page_size });
      return employees;
    } catch(error) {
      throw new Error("erreur")
    }
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

