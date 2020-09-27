import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCostPageComponent } from './admin-cost-page.component';

describe('AdminCostPageComponent', () => {
  let component: AdminCostPageComponent;
  let fixture: ComponentFixture<AdminCostPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
