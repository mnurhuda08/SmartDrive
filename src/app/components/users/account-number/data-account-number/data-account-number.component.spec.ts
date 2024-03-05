import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAccountNumberComponent } from './data-account-number.component';

describe('DataAccountNumberComponent', () => {
  let component: DataAccountNumberComponent;
  let fixture: ComponentFixture<DataAccountNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccountNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataAccountNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
