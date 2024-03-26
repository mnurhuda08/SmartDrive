
export class PaymentTransaction {
  patrTrxno = "";
  patrCreatedOn !: Date;
  patrDebet!: number;
  patrCredit!: number;
  patrUsacAccountNoFrom = "";
  patrUsacAccountNoTo = "";
  patrType = "";
  patrInvoiceNo = "";
  patrNotes = "";
  patrTrxnoRev = "";

}

export class UserAccount { 
  usacAccountno!: string; 
  usacType?: string | null; // In TypeScript, use union type to allow null

}
