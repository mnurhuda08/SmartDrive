import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPhoneComponent } from './data-phone.component';

describe('DataPhoneComponent', () => {
  let component: DataPhoneComponent;
  let fixture: ComponentFixture<DataPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPhoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
