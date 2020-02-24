import { InputType, Field, registerEnumType } from 'type-graphql';


export enum DirectionOrderBy{
    ASC = "ASC",
    DESC = "DESC"
}

registerEnumType(DirectionOrderBy, {
    name: "DirectionOrderBy", // this one is mandatory
    description: "The basic directions", // this one is optional
});


@InputType()
export class OrderByConditionGraphQL {
    @Field()
    field:string;
    @Field(type => DirectionOrderBy)
    direction: DirectionOrderBy;
}

// https://stackoverflow.com/questions/45598812/graphql-blackbox-any-type
// https://stackoverflow.com/questions/46562561/apollo-graphql-field-type-for-object-with-dynamic-keys
// https://stackoverflow.com/questions/56705157/best-way-to-define-a-map-object-in-graphql-schema
// https://stackoverflow.com/questions/32166851/how-to-create-a-list-of-custom-objects-in-graphql

