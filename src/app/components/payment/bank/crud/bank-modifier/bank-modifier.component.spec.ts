import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankModifierComponent } from './bank-modifier.component';

describe('BankModifierComponent', () => {
  let component: BankModifierComponent;
  let fixture: ComponentFixture<BankModifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankModifierComponent]
    });
    fixture = TestBed.createComponent(BankModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
