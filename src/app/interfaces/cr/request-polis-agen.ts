import { CustomerCreateRequest } from "./create-customer-request"
import { CustomerInscAsset } from "./customer-insc-asset"

export interface RequestPolisAgen {
    empEntityid: number
    isGranted: boolean
    areaCode: string
    creqCreateDate: string
    customerDto: CustomerCreateRequest
    customerInscAsset: CustomerInscAsset
}
