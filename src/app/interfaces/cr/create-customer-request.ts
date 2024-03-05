import { CustomerInscAsset } from "./customer-insc-asset"

export interface CreateCustomerRequest {
    empEntityid: number
    isGranted: boolean
    areaCode: string
    creqCreateDate: string
    customerDto: CustomerCreateRequest
    customerInscAsset: CustomerInscAsset
}

export interface CustomerCreateRequest {
    customerName: string
    phoneNumber: string
}
