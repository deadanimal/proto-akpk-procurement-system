import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengkosanProjekComponent } from './pengkosan-projek.component';

describe('PengkosanProjekComponent', () => {
  let component: PengkosanProjekComponent;
  let fixture: ComponentFixture<PengkosanProjekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengkosanProjekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengkosanProjekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
