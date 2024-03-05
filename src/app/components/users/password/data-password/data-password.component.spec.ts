import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPasswordComponent } from './data-password.component';

describe('DataPasswordComponent', () => {
  let component: DataPasswordComponent;
  let fixture: ComponentFixture<DataPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
