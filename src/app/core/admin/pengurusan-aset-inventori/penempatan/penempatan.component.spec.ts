import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenempatanComponent } from './penempatan.component';

describe('PenempatanComponent', () => {
  let component: PenempatanComponent;
  let fixture: ComponentFixture<PenempatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenempatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenempatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
