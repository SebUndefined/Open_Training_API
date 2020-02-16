import { JsonController, Get, QueryParams, OnUndefined, Param, Res } from "routing-controllers";
import { OpenAPI } from 'routing-controllers-openapi';
import { LoggerInterface } from '../../lib/logger/Index';
import { Logger } from '../../decorators/Logger';
import GetEmployeesQuery from '../../lib/queryParam/GetEmployeesQuery';
import { EmployeeService } from '../services/EmployeeService';
import { EmployeeNotFoundError } from '../errors/EmployeeNotFound';
import { Employee } from '../models/entities/Employee';
import { EmployeeDto } from '../models/dtos/EmployeeDto';


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
    public async findAll(@QueryParams() query: GetEmployeesQuery) {
        this.logger.debug("Log")
        const employees: EmployeeDto[] = await this.employeeService.findAll(query);
        return employees;
    }

    @Get('/:id')
    @OpenAPI({})
    @OnUndefined(EmployeeNotFoundError)
    public findOne(@Param('id') id: number): object {
        const employee = this.employeeService.findOne(id);
        return employee;
    }

}


