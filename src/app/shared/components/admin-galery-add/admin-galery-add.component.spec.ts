import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGaleryAddComponent } from './admin-galery-add.component';

describe('AdminGaleryAddComponent', () => {
  let component: AdminGaleryAddComponent;
  let fixture: ComponentFixture<AdminGaleryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGaleryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGaleryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
