import { GraphQLInterfaceType, Kind, ValueNode, GraphQLFieldConfigMap, GraphQLString, GraphQLObjectType, GraphQLList, GraphQLScalarType, BreakingChangeType } from "graphql";
import { OrderByCondition } from 'typeorm';

export enum DirectionOrderBy{
    ASC,
    DESC
}
export enum NullOrderBy {
    NULLS_FIRST = "NULLS FIRST",
    NULLS_LAST = "NULLS LAST"
}



export const Anything = new GraphQLScalarType({
    name: 'Anything',
    description: 'Any value.',
    parseValue: (value) => value,
    parseLiteral,
    serialize: (value) => value,
  })
  
  function parseLiteral (ast: any) {
    switch (ast.kind) {
      case Kind.BOOLEAN:
      case Kind.STRING:  
        return ast.value
      case Kind.INT:
      case Kind.FLOAT:
        return Number(ast.value)
      case Kind.LIST:
        return ast.values.map(parseLiteral)
      case Kind.OBJECT:
        return ast.fields.reduce((accumulator: any, field: any) => {
          accumulator[field.name.value] = parseLiteral(field.value)
          return accumulator
        }, {})
      case Kind.NULL:
          return null
      default:
        throw new Error(`Unexpected kind in parseLiteral: ${ast.kind}`)
    }
  }

