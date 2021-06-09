import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SusutNilaiComponent } from './susut-nilai.component';

describe('SusutNilaiComponent', () => {
  let component: SusutNilaiComponent;
  let fixture: ComponentFixture<SusutNilaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SusutNilaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SusutNilaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
