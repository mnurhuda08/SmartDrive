import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicefeasibilityComponent } from './servicefeasibility.component';

describe('ServicefeasibilityComponent', () => {
  let component: ServicefeasibilityComponent;
  let fixture: ComponentFixture<ServicefeasibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicefeasibilityComponent]
    });
    fixture = TestBed.createComponent(ServicefeasibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
