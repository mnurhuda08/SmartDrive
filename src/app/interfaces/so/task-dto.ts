import { WorkorderDto } from "./workorder-dto";

export interface TaskDto {
    seotId:number,
    seotName:string,
    seotStartdate:string,
    seotEnddate:string,
    seotActualStartdate:string,
    seotActualEnddate:string,
    seotStatus:string,
    seotArwgCode:string,
    seotSeroId:string,
    sowos:WorkorderDto[],
}
