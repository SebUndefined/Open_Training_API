import { JsonController, Get } from "routing-controllers";
import { OpenAPI } from 'routing-controllers-openapi';
import { LoggerInterface } from '../../lib/logger/Index';
import { Logger } from '../../decorators/Logger';


@JsonController()
export class HomeController {

    private logger : LoggerInterface;

    constructor(@Logger(__filename)logger : LoggerInterface){
        this.logger = logger;
    }


    @Get()
    @OpenAPI({})
    public find(): object {
        this.logger.debug("Log")
        return { name: 'Pouet' };
    }

}