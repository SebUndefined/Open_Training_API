import { GraphQLScalarType, Kind } from "graphql";
import { ArgsType, Field } from 'type-graphql';

export type OrderBy = {
    field: String;
    direction:"ASC" | "DESC"
}


export const OrderByScalar = new GraphQLScalarType({
  name: "OrderBy",
  description: "Order By object for list",
  parseValue(value: OrderBy) {
      console.log("parseValue")
      console.log(value.toString())
    //return new OrderBy(field); // value from the client input variables
  },
  serialize(value: OrderBy) {
    console.log(value)
    console.log(value.toString())
    return value.toString(); // value sent to the client
  },
  parseLiteral(ast) {
        console.log("parseLiteral")
      console.log(ast)
    if (ast.kind === Kind.OBJECT) {
        console.log(ast.fields)
    //   return new OrderBy({ast.field, ast.}); // value from the client query
    }
    return null;
  },
});