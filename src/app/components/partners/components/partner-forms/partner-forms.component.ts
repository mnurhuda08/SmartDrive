import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Action } from 'src/app/constants/action';
import { PartnerEntity } from 'src/app/constants/partner-entity';
import { ActionStatus } from 'src/app/interfaces/common/actionStatus';
import { City } from 'src/app/interfaces/master/city';
import { Partner } from 'src/app/interfaces/partners/partner';
import { PartnerService } from 'src/app/services/partners/partner.service';

@Component({
  selector: 'partner-forms',
  templateUrl: './partner-forms.component.html',
  styleUrls: ['./partner-forms.component.css']
})
export class PartnerFormsComponent implements OnInit {
  @Input() partner ?: Partner | null
  @Input() actionStatus !: ActionStatus
  @Output() formValidityChange: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() formDataValueChange: EventEmitter<Partner> = new EventEmitter<Partner>()
  form !: FormGroup
  cities !: City[]
  public enumAction = Action
  public enumPartnerEntity = PartnerEntity

  constructor(private partnerService: PartnerService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      partEntityid: 0,
      partName: ["", Validators.required],
      partNpwp: ["", [Validators.required, Validators.pattern('^[0-9]+$')]],
      partAddress: ["", Validators.required],
      partStatus: ["", Validators.required],
      partAccountNo: ["", [Validators.required, Validators.pattern('^[0-9]+$')]],
      partCityId: [0, Validators.required],
      partJoinDate: ["", Validators.required],
    })
  }

  private updateFormValues(): void {
    
    if(this.partner !== null && this.partner !== undefined && this.actionStatus.action == Action.UPDATE){   
      const dateTimeString = this.partner?.partJoinDate.toString();
      const datePart = dateTimeString?.split('T')[0];
      this.form.patchValue({
        partEntityid: this.partner.partEntityid,
        partName: this.partner.partName,
        partNpwp: this.partner.partNpwp,
        partAddress: this.partner.partAddress,
        partStatus: this.partner.partStatus,
        partAccountNo: this.partner.partAccountNo,
        partCityId: this.partner.partCityId,
        partJoinDate: datePart,
      });
    }
  }

  private initializeEmptyForm(): void {
    this.form.patchValue({
      partEntityId: 0,
      partName: '',
      partNpwp: '',
      partAddress: '',
      partStatus: '',
      partAccountNo: '',
      partCityId: '',
      partJoinDate: '',
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

    this.form.valueChanges.subscribe((value : Partner) => {
      value.type = this.enumPartnerEntity.PARTNER
      this.formDataValueChange.emit(value)
    })
    
    this.partnerService.getCities().subscribe({
      next: (v) => this.cities = v,
      error: (c) => console.log(c),
      complete: () => console.log("complete")    
    })
  }
}
