import { JsonController, Get, QueryParams, OnUndefined, Param } from "routing-controllers";
import { OpenAPI } from 'routing-controllers-openapi';
import { LoggerInterface } from '../../lib/logger/index';
import { Logger } from '../../decorators/Logger';
import GetEmployeesQuery from '../../lib/queryParam/GetEmployeesQuery';
import { EmployeeService } from '../services/EmployeeService';
import { EmployeeNotFoundError } from '../errors/EmployeeNotFound';


@JsonController('/employees')
export class EmployeeController {

    private logger : LoggerInterface;
    private employeeService: EmployeeService;

    constructor(@Logger(__filename)logger : LoggerInterface, employeeService: EmployeeService){
        this.logger = logger;
        this.employeeService = employeeService;
    }


    @Get('/')
    @OpenAPI({})
    public findAll(@QueryParams() query: GetEmployeesQuery) {
        this.logger.debug("Log")
        return this.employeeService.findAll(query);
    }

    @Get('/:id')
    @OpenAPI({})
    @OnUndefined(EmployeeNotFoundError)
    public findOne(@Param('id') id: number): object {
        const employee = this.employeeService.findOne(id);
        return employee;
    }

}
