import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhonePopupComponent } from './edit-phone-popup.component';

describe('EditPhonePopupComponent', () => {
  let component: EditPhonePopupComponent;
  let fixture: ComponentFixture<EditPhonePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPhonePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPhonePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
