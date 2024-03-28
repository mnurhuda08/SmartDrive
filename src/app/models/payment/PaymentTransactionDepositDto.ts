export class PaymentTransactionDepositDto {
  sendAmount!: number;

  patrUsacAccountNoTo!: string;

  patrType!: string;

  patrNotes!: string;
}

export class PaymentTransactionTransferMoneyDto {
  sendAmount!: number;

  patrUsacAccountNoFrom!: string;
  
  patrUsacAccountNoTo!: string;

  patrType!: string;

  patrNotes!: string;
}
