import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryPopupComponent } from './galery-popup.component';

describe('GaleryPopupComponent', () => {
  let component: GaleryPopupComponent;
  let fixture: ComponentFixture<GaleryPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleryPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
