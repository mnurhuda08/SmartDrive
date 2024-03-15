import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClosePolisComponent } from './create-close-polis.component';

describe('CreateClosePolisComponent', () => {
  let component: CreateClosePolisComponent;
  let fixture: ComponentFixture<CreateClosePolisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateClosePolisComponent]
    });
    fixture = TestBed.createComponent(CreateClosePolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
