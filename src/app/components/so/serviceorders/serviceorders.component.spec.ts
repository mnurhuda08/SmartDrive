import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceordersComponent } from './serviceorders.component';

describe('ServiceordersComponent', () => {
  let component: ServiceordersComponent;
  let fixture: ComponentFixture<ServiceordersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceordersComponent]
    });
    fixture = TestBed.createComponent(ServiceordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
