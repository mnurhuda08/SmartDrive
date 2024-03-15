import { CustomerInscAsset } from "./customer-insc-asset"
import { RequestCustomerInfo } from "./request-customer-info"

export interface CreateCustomerRequest {
    empEntityid: number
    isGranted: boolean
    areaCode: string
    creqCreateDate: string
    customerDto: RequestCustomerInfo
    customerInscAsset: CustomerInscAsset
}
