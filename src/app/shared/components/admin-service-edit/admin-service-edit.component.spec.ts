import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceEditComponent } from './admin-service-edit.component';

describe('AdminServiceEditComponent', () => {
  let component: AdminServiceEditComponent;
  let fixture: ComponentFixture<AdminServiceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminServiceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
