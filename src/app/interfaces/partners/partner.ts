import { PartnerStatus } from "../common/partnerStatus"

export interface Partner {
    partEntityid ?: number,
    partName : string,
    partAddress : string,
    partJoinDate : Date,
    partAccountNo : string,
    partNpwp : string,
    partCityId: number
    partnerStatus: PartnerStatus
}
