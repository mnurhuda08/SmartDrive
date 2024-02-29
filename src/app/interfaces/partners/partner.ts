import { PartnerStatus } from "src/app/constants/partnerStatus";

export interface Partner {
    type: 'partner'
    partEntityid : number,
    partName : string,
    partAddress : string,
    partJoinDate : Date,
    partAccountNo : string,
    partNpwp : string,
    partStatus: PartnerStatus,
    partCityId: number,
    cityName: string,
}
