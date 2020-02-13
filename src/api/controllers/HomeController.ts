import { JsonController, Get, QueryParams } from "routing-controllers";
import { OpenAPI } from 'routing-controllers-openapi';
import { LoggerInterface } from '../../lib/logger/Index';
import { Logger } from '../../decorators/Logger';
import GetEmployeesQuery from '../../lib/queryParam/GetEmployeesQuery';


@JsonController()
export class HomeController {

    private logger : LoggerInterface;

    constructor(@Logger(__filename)logger : LoggerInterface){
        this.logger = logger;
    }


    @Get()
    @OpenAPI({})
    public find(@QueryParams() query: GetEmployeesQuery): object {
        this.logger.debug("Log")
        console.log(query)
        return { name: 'Pouet' };
    }

}