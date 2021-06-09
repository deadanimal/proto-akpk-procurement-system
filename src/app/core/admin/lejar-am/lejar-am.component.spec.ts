import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LejarAmComponent } from './lejar-am.component';

describe('LejarAmComponent', () => {
  let component: LejarAmComponent;
  let fixture: ComponentFixture<LejarAmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LejarAmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LejarAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
