import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyelenggaraanComponent } from './penyelenggaraan.component';

describe('PenyelenggaraanComponent', () => {
  let component: PenyelenggaraanComponent;
  let fixture: ComponentFixture<PenyelenggaraanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenyelenggaraanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenyelenggaraanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
