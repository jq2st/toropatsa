import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCostAddComponent } from './admin-cost-add.component';

describe('AdminCostAddComponent', () => {
  let component: AdminCostAddComponent;
  let fixture: ComponentFixture<AdminCostAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCostAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCostAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
