import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRolePopupComponent } from './add-role-popup.component';

describe('AddRolePopupComponent', () => {
  let component: AddRolePopupComponent;
  let fixture: ComponentFixture<AddRolePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddRolePopupComponent]
    });
    fixture = TestBed.createComponent(AddRolePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
