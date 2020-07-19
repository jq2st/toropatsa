import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGaleryPageComponent } from './admin-galery-page.component';

describe('AdminGaleryPageComponent', () => {
  let component: AdminGaleryPageComponent;
  let fixture: ComponentFixture<AdminGaleryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGaleryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGaleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
