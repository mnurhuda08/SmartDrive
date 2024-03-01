import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPasswordPopupComponent } from './edit-password-popup.component';

describe('EditPasswordPopupComponent', () => {
  let component: EditPasswordPopupComponent;
  let fixture: ComponentFixture<EditPasswordPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPasswordPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPasswordPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
