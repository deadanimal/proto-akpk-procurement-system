import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelupusanComponent } from './pelupusan.component';

describe('PelupusanComponent', () => {
  let component: PelupusanComponent;
  let fixture: ComponentFixture<PelupusanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelupusanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelupusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
