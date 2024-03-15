import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPolisComponent } from './create-new-polis.component';

describe('CreateNewPolisComponent', () => {
  let component: CreateNewPolisComponent;
  let fixture: ComponentFixture<CreateNewPolisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewPolisComponent]
    });
    fixture = TestBed.createComponent(CreateNewPolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
