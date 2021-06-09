import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PentadbirSistemComponent } from './pentadbir-sistem.component';

describe('PentadbirSistemComponent', () => {
  let component: PentadbirSistemComponent;
  let fixture: ComponentFixture<PentadbirSistemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PentadbirSistemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PentadbirSistemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
