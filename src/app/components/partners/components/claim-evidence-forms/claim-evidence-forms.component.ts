import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Action } from 'src/app/constants/action';
import { ActionStatus } from 'src/app/interfaces/common/actionStatus';
import { ClaimAssetEvidence } from 'src/app/interfaces/partners/claim-assets-evidence';
import { ClaimAssetEvidenceService } from 'src/app/services/partners/claim-asset-evidence.service';

@Component({
  selector: 'app-claim-evidence-forms',
  templateUrl: './claim-evidence-forms.component.html',
  styleUrls: ['./claim-evidence-forms.component.css']
})
export class ClaimEvidenceFormsComponent implements OnInit {
  @Input() actionStatus !: ActionStatus
  @Input() workOrderId?: {
    seroId: string,
    seroPartId: number,
    workOrder: string
  }

  @Output() formValidityChange: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() formDataValueChange: EventEmitter<FormData> = new EventEmitter<FormData>()

  claimAssetEvidences: ClaimAssetEvidence[] | null = null
  form: FormGroup

  public enumAction = Action

  constructor(
    private fb: FormBuilder,
    private _claimAssetEvidenceService : ClaimAssetEvidenceService
  ) {
    this.form = this.fb.group({
      rows: this.fb.array([])
    })
  }

  createRow(): FormGroup{
    return this.fb.group({
      caevNote: ['', Validators.required],
      caevFee: [null, Validators.required],
      photo: [null, Validators.required],
      caevPartEntityid: this.workOrderId?.seroPartId,
      caevSeroId: this.workOrderId?.seroId,
    })
  }

  addRow(){
    const newRow = this.createRow()
    this.rows.push(newRow)
    this.updateFormValidity()
    this.emitFormDataValue()
  }

  removeRow(index: number){
    this.rows.removeAt(index)
    this.updateFormValidity()
    this.emitFormDataValue()
  }

  getFileInputControls(index: number) {
    return (this.form.get('rows') as FormArray).at(index).get('photo');
  }

  getFileInputLabel(index: number) {
    const control = this.rows.at(index).get('photo');
    const name =  control?.value?.name || 'No file selected';
    return name;  }

  updateFormValidity(): void {
    let isValid = true;
    this.rows.controls.forEach(control => {
      if (!control.valid) {
        isValid = false;
      }
    });
    
    this.formValidityChange.emit(isValid);
  }

  get rows(): FormArray {
    return this.form.get('rows') as FormArray
  }

  onFileSelected(event:any, index: number) {
    if(event.target.files) {
      const controle = this.rows.at(index).get("photo")
      controle?.patchValue(event.target.files[0])
    }
    
  }

  getFormData():FormData{
    const formData = new FormData();
    const formArray = this.form.get('rows') as FormArray;
    formArray.controls.forEach((controlGroup) => {
      formData.append('caevPartEntityid', controlGroup?.get('caevPartEntityid')?.value)
      formData.append('caevSeroId', controlGroup?.get('caevSeroId')?.value)
      formData.append('caevFee', controlGroup?.get('caevFee')?.value);
      formData.append('caevNote', controlGroup?.get('caevNote')?.value);
      const photoFile = controlGroup.get('photo')?.value;
      formData.append('photo', photoFile);
    });
    return formData
  }

  emitFormDataValue(): void {
    const formData = this.getFormData();
    this.formDataValueChange.emit(formData);
  }

  getClaimEvidence(){
    this._claimAssetEvidenceService.getEvidence(this.workOrderId?.seroPartId as number, this.workOrderId?.seroId as string).subscribe({
      next: (v) => this.claimAssetEvidences = v
    })
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['actionStatus'] && changes['actionStatus'].currentValue.action === Action.VIEW) {
      this.getClaimEvidence()
    }

    if (changes['actionStatus'] && changes['actionStatus'].currentValue.action === Action.CREATE) {
      // this.resetForm()
    }
  }

  resetForm(){
    this.form = this.fb.group({
      rows: this.fb.array([])
    })
    this.addRow()
  }

  ngOnInit(): void {
    this.addRow()
    this.form.statusChanges.subscribe(() => {
      this.formValidityChange.emit(this.form.valid);
    });
    this.form.valueChanges.subscribe(() => {
      this.emitFormDataValue()
    })
  }

}
