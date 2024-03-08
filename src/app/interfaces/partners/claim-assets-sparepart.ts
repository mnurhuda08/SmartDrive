import { PartnerEntity } from "src/app/constants/partner-entity";

export interface ClaimAssetsSparepart {
    type: PartnerEntity.CLAIM_ASSET_SPAREPARTS,
    caspId: number;
    caspItemName?: string;
    caspQuantity?: number;
    caspItemPrice?: number;
    caspSubtotal?: number;
    caspPartEntityid?: number;
    caspSeroId?: string;
    caspCreatedDate?: Date;
}
