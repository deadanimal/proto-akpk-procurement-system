import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemMaklumatPengurusanComponent } from './sistem-maklumat-pengurusan.component';

describe('SistemMaklumatPengurusanComponent', () => {
  let component: SistemMaklumatPengurusanComponent;
  let fixture: ComponentFixture<SistemMaklumatPengurusanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemMaklumatPengurusanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemMaklumatPengurusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
