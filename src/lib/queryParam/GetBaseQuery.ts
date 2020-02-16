import { IsPositive, Max, IsArray } from 'class-validator';


export default abstract class GetBaseQuery {
    @IsPositive()
    page_number: number = 1;
    @Max(100)
    page_size: number = 25;
    @IsArray()
    sort_by: string[] = [];


    public abstract getSort_by_Formated(): Map<string, "ASC" | "DESC">;

    protected static formatFieldName(theString: string) {
        return theString.charAt(0).toUpperCase() + theString.slice(1);
    }
}