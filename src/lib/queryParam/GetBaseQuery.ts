import { IsPositive, Max, IsArray } from 'class-validator';


export default class GetBaseQuery {
    @IsPositive()
    page_number: number = 1;
    @Max(100)
    page_size: number = 25;
    @IsArray()
    sort_by: string[] = [];
}