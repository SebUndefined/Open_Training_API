import { GraphQLScalarType, Kind } from "graphql";

export class OrderBy {
    field: String;
    direction:"ASC" | "DESC"

    constructor(field:string, direction: "ASC" | "DESC") {
      this.field = field;
      this.direction = direction;
    }
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
        if(ast.fields[0].kind === Kind.OBJECT_FIELD 
            && ast.fields[0].name.value === 'field'
            && ast.fields[1].name.value === 'direction'
            && ast.fields[0].value.kind === Kind.STRING 
            && ast.fields[1].value.kind === Kind.STRING 
            ) {
            const direction = ast.fields[1].value.value === 'DESC' ? 'DESC' : 'ASC'
            return new OrderBy(ast.fields[0].value.value, direction)
        }
        return null;
    }
    return null;
  },
});