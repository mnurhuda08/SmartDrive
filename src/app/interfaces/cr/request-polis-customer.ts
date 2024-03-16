import { CustomerInscAsset } from "./customer-insc-asset"
import { RequestCustomerInfo } from "./request-customer-info"

export interface RequestPolisCustomer {
    areaCode: string
    creqCreateDate: string
    customerDto: RequestCustomerInfo
    customerInscAsset: CustomerInscAsset
}
