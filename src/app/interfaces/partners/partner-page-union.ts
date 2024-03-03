import { ClaimAssetsSparepart } from "./claim-assets-sparepart";
import { Partner } from "./partner";
import { PartnerAreaWorkgroup, PartnerAreaWorkgroupForm, PartnerAreaWorkgroupResponse } from "./partner-area-workgroup";
import { PartnerContact } from "./partner-contact";

export type PartnerUnion = Partner | PartnerContact |  PartnerAreaWorkgroupForm | ClaimAssetsSparepart