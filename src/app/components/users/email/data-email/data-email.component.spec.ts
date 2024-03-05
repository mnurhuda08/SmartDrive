import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEmailComponent } from './data-email.component';

describe('DataEmailComponent', () => {
  let component: DataEmailComponent;
  let fixture: ComponentFixture<DataEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
