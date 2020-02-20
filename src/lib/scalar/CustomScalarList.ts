import { InputType, Field, registerEnumType } from 'type-graphql';


export enum DirectionOrderBy{
    ASC = "ASC",
    DESC = "DESC"
}

export enum NullOrderBy {
    NULLS_FIRST = "NULLS FIRST",
    NULLS_LAST = "NULLS LAST"
}

registerEnumType(DirectionOrderBy, {
    name: "DirectionOrderBy", // this one is mandatory
    description: "The basic directions", // this one is optional
});

registerEnumType(NullOrderBy, {
    name: "NullOrderBy", // this one is mandatory
    description: "The basic directions", // this one is optional
});


@InputType()
export class OrderByConditionGraphQL {
    @Field()
    field:string;
    @Field(type => DirectionOrderBy)
    direction: DirectionOrderBy;
    @Field(type => NullOrderBy)
    nulls: NullOrderBy;
}

// https://stackoverflow.com/questions/45598812/graphql-blackbox-any-type
// https://stackoverflow.com/questions/46562561/apollo-graphql-field-type-for-object-with-dynamic-keys
// https://stackoverflow.com/questions/56705157/best-way-to-define-a-map-object-in-graphql-schema

