export class Bank {
  bankEntityid?: number;
  bankName = '';
  bankDesc = '';
}


export interface PartnerBatchInvoiceResponse {
  invoiceNo?: string;
  createOn?: Date;
  polisNumber?: string;
  policeNumber?: string;
  subtotal: number;
  tax: number;
  accountNumber?: string;
  paidDate?: Date;
  partnerName?: string;
}