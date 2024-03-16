import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Action } from 'src/app/constants/action';
import { PartnerEntity } from 'src/app/constants/partner-entity';
import { ActionStatus } from 'src/app/interfaces/common/actionStatus';
import { Partner } from 'src/app/interfaces/partners/partner';
import { PartnerContact } from 'src/app/interfaces/partners/partner-contact';
import { PartnerService } from 'src/app/services/partners/partner.service';

@Component({
  selector: 'partner-contact-forms',
  templateUrl: './partner-contact-forms.component.html',
  styleUrls: ['./partner-contact-forms.component.css']
})
export class PartnerContactFormsComponent implements OnInit {

  @Input() partnerContact ?: PartnerContact | null
  @Input() actionStatus !: ActionStatus
  @Output() formValidityChange: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() formDataValueChange: EventEmitter<PartnerContact> = new EventEmitter<PartnerContact>()
  
  form !: FormGroup
  partners : Partner[] = []

  public enumAction = Action
  public enumPartnerEntity = PartnerEntity


  constructor(private formBuilder: FormBuilder, private _partnerService:PartnerService){
    this.form = this.formBuilder.group({
      pacoUserEntityid: 0,
      pacoPatrnEntityid: ['', Validators.required],
      pacoStatus: ['', Validators.required], 
      fullName: ['', Validators.required],
      phoneNumber: ["", [Validators.required, Validators.pattern('^[0-9]+$')]],
      isGranted: false,
    })
  }
  private updateFormValues(): void {
    
    if(this.partnerContact !== null && this.partnerContact !== undefined && this.actionStatus.action == Action.UPDATE){   
      this.form.patchValue({
        pacoUserEntityid: this.partnerContact.pacoUserEntityid,
        pacoPatrnEntityid: this.partnerContact.pacoPatrnEntityid,
        pacoStatus: this.partnerContact.pacoStatus, 
        fullName: this.partnerContact.fullName,
        phoneNumber: this.partnerContact?.phoneNumber,
        isGranted: this.partnerContact.isGranted
      });
    }
  }

  private initializeEmptyForm(): void {
    this.form.patchValue({
      pacoUserEntityid: 0,
      pacoPatrnEntityid: '',
      pacoStatus: '', 
      fullName: '',
      phoneNumber: '',
      isGranted: false
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

    this.form.valueChanges.subscribe((value : PartnerContact) => {
      value.type = PartnerEntity.PARTNER_CONTACT
      this.formDataValueChange.emit(value)
    })

    this._partnerService.getPartners().subscribe({
      next: (v) => this.partners = v,
      error: (e) => console.log(e),
    })
  }

}
