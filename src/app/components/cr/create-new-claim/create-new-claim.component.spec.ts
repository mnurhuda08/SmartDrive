import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewClaimComponent } from './create-new-claim.component';

describe('CreateNewClaimComponent', () => {
  let component: CreateNewClaimComponent;
  let fixture: ComponentFixture<CreateNewClaimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewClaimComponent]
    });
    fixture = TestBed.createComponent(CreateNewClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
