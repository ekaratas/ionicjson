import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AracDetayPage } from './arac-detay.page';

describe('AracDetayPage', () => {
  let component: AracDetayPage;
  let fixture: ComponentFixture<AracDetayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AracDetayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AracDetayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
