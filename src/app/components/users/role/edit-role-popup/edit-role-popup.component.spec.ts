import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRolePopupComponent } from './edit-role-popup.component';

describe('EditRolePopupComponent', () => {
  let component: EditRolePopupComponent;
  let fixture: ComponentFixture<EditRolePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditRolePopupComponent]
    });
    fixture = TestBed.createComponent(EditRolePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
