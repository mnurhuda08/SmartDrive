import { PartnerEntity } from "src/app/constants/partner-entity";
import { PartnerStatus } from "src/app/constants/partnerStatus";

interface PartnerAreaWorkgroupResponse {
    type: PartnerEntity.PARTNER_AREA_WORKGROUP
    pawoPatrEntityid: number;
    pawoArwgCode: string;
    pawoUserEntityid: number;
    pawoStatus: PartnerStatus;
    pawoModifiedDate: Date | null;
    partName: string;
    arwgDesc: string;
    cityName: string;
    provName: string;
    zonesName: string;
    userName: string;
}

interface PartnerAreaWorkgroup {
    type: PartnerEntity.PARTNER_AREA_WORKGROUP
    pawoPatrEntityid: number;
    pawoArwgCode: string;
    pawoUserEntityid: number;
    pawoStatus: PartnerStatus;
}

interface PartnerAreaWorkgroupForm {
    type: PartnerEntity.PARTNER_AREA_WORKGROUP
    pawoArwgCode: string;
    pawoId: string;
    pawoStatus: PartnerStatus;
}

export {
    PartnerAreaWorkgroup,
    PartnerAreaWorkgroupResponse,
    PartnerAreaWorkgroupForm
}