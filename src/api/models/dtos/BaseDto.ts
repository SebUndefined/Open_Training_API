export abstract class BaseDto {
    type: string;
    id: number;
    abstract attributes : any;

    constructor(type:string, id: number){
        this.type = type;
        this.id = id;
    }
}