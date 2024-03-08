import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core'
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms'
import { Action } from 'src/app/constants/action'
import { ActionStatus } from 'src/app/interfaces/common/actionStatus'
import { ClaimAssetsSparepart } from 'src/app/interfaces/partners/claim-assets-sparepart'
import { PartnerContact } from 'src/app/interfaces/partners/partner-contact'
import { ClaimAssetSparepartService } from 'src/app/services/partners/claim-asset-sparepart.service'

@Component({
  selector: 'app-claims-sparepart-forms',
  templateUrl: './claims-sparepart-forms.component.html',
  // styleUrls: ['./claims-evidence-forms.component.css']
})
export class ClaimsSparepartFormsComponent implements OnInit {
  @Input() actionStatus !: ActionStatus
  @Input() workOrderId?: {
    seroId: string,
    seroPartId: number,
    workOrder: string
  }
  @Output() formValidityChange: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() formDataValueChange: EventEmitter<ClaimAssetsSparepart[]> = new EventEmitter<ClaimAssetsSparepart[]>()
  
  claimAssetSpareparts: ClaimAssetsSparepart[] | null = []
  form!: FormGroup

  public enumAction = Action

  constructor(
    private fb: FormBuilder, 
    private _claimSparepartService : ClaimAssetSparepartService
  ) {
    this.form = this.fb.group({
      rows: this.fb.array([])
    })
  }


  private subscribeToChanges(row: FormGroup): void {
    const caspQuantityControl = row.get('caspQuantity')
    const caspItemPriceControl = row.get('caspItemPrice')

    caspQuantityControl?.valueChanges.subscribe(() => {
      this.calculateSubtotal(row)
      this.updateFormValidity()
      this.emitFormDataValue();
    })

    caspItemPriceControl?.valueChanges.subscribe(() => {
      this.calculateSubtotal(row)
      this.updateFormValidity()
      this.emitFormDataValue();
    })
  }

  private calculateSubtotal(row: FormGroup): void {
    const itemPrice = row?.get('caspItemPrice')?.value
    const caspQuantity = row?.get('caspQuantity')?.value
    const subtotal = Number(itemPrice) * Number(caspQuantity) ?? 0
    row?.get('caspSubtotal')?.setValue(subtotal)
  }

  addRow(): void {
    const newRow = this.createRow()
    this.rows.push(newRow)
    this.updateFormValidity()
    this.subscribeToChanges(newRow)
  }

  removeRow(index: number): void {
    this.rows.removeAt(index)
    this.updateFormValidity()
  }

  private createRow(): FormGroup {
    return this.fb.group({
      caspId: [0], // Default value for caspId, adjust as needed
      caspItemName: ['', Validators.required],
      caspQuantity: [0, Validators.required],
      caspItemPrice: [0, Validators.required],
      caspSubtotal: [0],
      caspPartEntityid: this.workOrderId?.seroPartId,
      caspSeroId: this.workOrderId?.seroId,
    })
  }

  get rows(): FormArray {
    return this.form.get('rows') as FormArray
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['actionStatus'] && changes['actionStatus'].currentValue.action === Action.VIEW) {
      this.getClaimSparepart()
      this.viewFormValues();
    }

    if (changes['actionStatus'] && changes['actionStatus'].currentValue.action === Action.CREATE) {
      this.form = this.fb.group({
        rows: this.fb.array([])
      })
      this.addRow()
    }
  }

  viewFormValues() {
    this.form = this.fb.group({
      rows: this.fb.array([])
    })
    const rowsArray = this.form.get('rows') as FormArray;
    this.claimAssetSpareparts!.forEach(part => {
      const rowGroup = this.fb.group({
        caspId: { value: part.caspId, disabled: true },
        caspItemName: { value: part.caspItemName, disabled: true },
        caspQuantity: { value: part.caspQuantity, disabled: true },
        caspItemPrice: { value: part.caspItemPrice, disabled: true },
        caspPartEntityid: { value: part.caspPartEntityid, disabled: true },
        caspSeroId: { value: part.caspSeroId, disabled: true },
        caspCreatedDate: { value: part.caspCreatedDate, disabled: true },
        caspSubtotal: { value: part.caspSubtotal, disabled: true }
      });
      rowsArray.push(rowGroup);
    })
  }


  emitFormDataValue(): void {
    const formData = this.getFormData();
    this.formDataValueChange.emit(formData);
  }

  updateFormValidity(): void {
    let isValid = true;
    this.rows.controls.forEach(control => {
      if (!control.valid) {
        isValid = false;
      }
    });
    this.formValidityChange.emit(isValid);
  }

  getFormData(): ClaimAssetsSparepart[] {
    const formData: ClaimAssetsSparepart[] = [];
    this.rows.controls.forEach(control => {
      formData.push(control.value);
    });
    return formData;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      rows: this.fb.array([])
    })
    this.addRow()
    this.form.valueChanges.subscribe(() => {
      this.emitFormDataValue();
    });
    this.form.statusChanges.subscribe(() => {
      this.formValidityChange.emit(this.form.valid);
    });
  }

  getClaimSparepart(){
    this._claimSparepartService.getSparepart(this.workOrderId?.seroId as string, this.workOrderId?.seroPartId as number)
    .subscribe({
      next: (v) => this.claimAssetSpareparts = v
    })
  }
}
