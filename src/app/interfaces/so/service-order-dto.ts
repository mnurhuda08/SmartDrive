import { ServiceDto } from "./service-dto";
import { TaskDto } from "./task-dto";

export interface ServiceOrderDto {
    seroId:string,
    seroOrdtType:string,
    seroStatus:string,
    seroReason:string,
    servClaimNo:string,
    servClaimStartdate:string,
    servClaimEnddate:string,
    seroServId:string,
    seroSeroId:string,
    seroAgentEntityid:string,
    seroPartId:string,
    seroServ:ServiceDto | null,
    seots:TaskDto[],
}
