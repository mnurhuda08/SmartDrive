import { PartnerEntity } from "src/app/constants/partner-entity";
import { PartnerStatus } from "src/app/constants/partnerStatus";

export interface PartnerContact {
    type: PartnerEntity.PARTNER_CONTACT,
    pacoPatrnEntityid: number,
    pacoUserEntityid: number,
    pacoStatus: PartnerStatus,
    fullName: PartnerStatus,
    phoneNumber: string,
    isGranted: boolean,
    pacoPatrnEntityName ?: string
}
