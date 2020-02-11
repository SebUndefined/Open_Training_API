import { JsonController, Get } from "routing-controllers";
import { OpenAPI } from 'routing-controllers-openapi';


@JsonController()
export class HomeController {

    @Get()
    @OpenAPI({})
    public find(): object {
        return { name: 'Pouet' };
    }

}