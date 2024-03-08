import { CustomerCreateRequest } from "./create-customer-request"
import { CustomerInscAsset } from "./customer-insc-asset"

export interface RequestPolisCustomer {
    areaCode: string
    creqCreateDate: string
    customerDto: CustomerCreateRequest
    customerInscAsset: CustomerInscAsset
}
