import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRoleComponent } from './data-role.component';

describe('DataRoleComponent', () => {
  let component: DataRoleComponent;
  let fixture: ComponentFixture<DataRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataRoleComponent]
    });
    fixture = TestBed.createComponent(DataRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
