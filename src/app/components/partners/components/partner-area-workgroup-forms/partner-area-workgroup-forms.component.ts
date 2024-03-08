import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Action } from 'src/app/constants/action';
import { PartnerEntity } from 'src/app/constants/partner-entity';
import { ActionStatus } from 'src/app/interfaces/common/actionStatus';
import { AreaWorkgroup } from 'src/app/interfaces/master/area-workgroup';
import { Partner } from 'src/app/interfaces/partners/partner';
import { PartnerAreaWorkgroupForm } from 'src/app/interfaces/partners/partner-area-workgroup';
import { PartnerContact } from 'src/app/interfaces/partners/partner-contact';
import { PartnerAreaWorkgroupService } from 'src/app/services/partners/partner-area-workgroup.service';
import { PartnerContactService } from 'src/app/services/partners/partner-contact.service';
import { PartnerService } from 'src/app/services/partners/partner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'partner-area-workgroup-forms',
  templateUrl: './partner-area-workgroup-forms.component.html',
  styleUrls: ['./partner-area-workgroup-forms.component.css']
})
export class PartnerAreaWorkgroupFormsComponent {
  @Input() partnerAreaWorkgroupForm ?: PartnerAreaWorkgroupForm | null
  @Input() actionStatus !: ActionStatus
  @Output() formValidityChange: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() formDataValueChange: EventEmitter<PartnerAreaWorkgroupForm> = new EventEmitter<PartnerAreaWorkgroupForm>()
  
  form !: FormGroup
  areaWorkgroups: AreaWorkgroup[] = []
  partnerContacts: PartnerContact[] = []

  public enumAction = Action
  public enumPartnerEntity = PartnerEntity 

  constructor(
    private formBuilder: FormBuilder, 
    private _partnerAreaWorkgroup: PartnerAreaWorkgroupService,
    private _partnerContact : PartnerContactService
    ){
    this.form = this.formBuilder.group({
      pawoArwgCode: ['', Validators.required],
      pawoId: ['', Validators.required],
      pawoStatus: ['', Validators.required]
    })
  }
  private updateFormValues(): void {
    
    if(this.partnerAreaWorkgroupForm !== null && this.partnerAreaWorkgroupForm !== undefined && this.actionStatus.action == Action.UPDATE){   
      this.form.patchValue({
        pawoArwgCode: this.partnerAreaWorkgroupForm.pawoArwgCode,
        pawoId: this.partnerAreaWorkgroupForm.pawoId,
        pawoStatus:this.partnerAreaWorkgroupForm.pawoStatus
      });
    }
  }

  private initializeEmptyForm(): void {
    this.form.patchValue({
      pawoArwgCode: '',
      pawoId:'',
      pawoStatus:''
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['actionStatus'] && changes['actionStatus'].currentValue.action === Action.UPDATE ) {
      this.updateFormValues();
    }

    if (changes['actionStatus'] && changes['actionStatus'].currentValue.action === Action.CREATE ) {
      this.initializeEmptyForm()
    }
  }

  ngOnInit(): void {
    this.form.statusChanges.subscribe(() => {
      this.formValidityChange.emit(this.form.valid)
    })

    this.form.valueChanges.subscribe((value : PartnerAreaWorkgroupForm) => {
      value.type = this.enumPartnerEntity.PARTNER_AREA_WORKGROUP
      this.formDataValueChange.emit(value)
    })

    this._partnerAreaWorkgroup.getAreaWorkgroup().subscribe({
      next: (v) => this.areaWorkgroups = v,
      error: (e) => Swal.fire('Error', `Error: ${e.message}`, 'error'),
    })

    this._partnerContact.getPartnerContact().subscribe({
      next: (v) => this.partnerContacts = v,
      error: (e) => Swal.fire('Error', `Error: ${e.message} ?? Error Occured`, 'error'),
    })

  }
}
