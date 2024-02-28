import { CustomerRequestDto } from "./customer-request-dto";
import { ServiceOrderDto } from "./service-order-dto";
import { UserDto } from "./user-dto";

export interface ServiceDto{
    servId:number,
    servCreatedOn:string,
    servType:string,
    servInsuranceNo:string,
    servVehicleNo:string,
    servStartdate:string,
    servEnddate:string,
    servStatus:string,
    servServId:number,
    servCustEntityid:number,
    servCreqEntityid:number,
    servCustEntity:UserDto,
    servCreqEntity:CustomerRequestDto,
    seros:ServiceOrderDto[]
}
