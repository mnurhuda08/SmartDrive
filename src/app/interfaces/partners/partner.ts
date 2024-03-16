import { PartnerEntity } from "src/app/constants/partner-entity";
import { PartnerStatus } from "src/app/constants/partnerStatus";

export interface Partner {
    type: PartnerEntity.PARTNER,
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
