import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelaburanComponent } from './pelaburan.component';

describe('PelaburanComponent', () => {
  let component: PelaburanComponent;
  let fixture: ComponentFixture<PelaburanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelaburanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelaburanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
