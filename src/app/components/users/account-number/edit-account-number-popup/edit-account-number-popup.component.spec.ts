import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountNumberPopupComponent } from './edit-account-number-popup.component';

describe('EditAccountNumberPopupComponent', () => {
  let component: EditAccountNumberPopupComponent;
  let fixture: ComponentFixture<EditAccountNumberPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAccountNumberPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAccountNumberPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
