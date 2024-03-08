import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmailPopupComponent } from './edit-email-popup.component';

describe('EditEmailPopupComponent', () => {
  let component: EditEmailPopupComponent;
  let fixture: ComponentFixture<EditEmailPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEmailPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEmailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
