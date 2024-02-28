import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolisInformationComponent } from './polis-information.component';

describe('PolisInformationComponent', () => {
  let component: PolisInformationComponent;
  let fixture: ComponentFixture<PolisInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolisInformationComponent]
    });
    fixture = TestBed.createComponent(PolisInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
