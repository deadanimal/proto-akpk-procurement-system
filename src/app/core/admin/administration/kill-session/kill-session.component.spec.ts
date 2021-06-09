import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KillSessionComponent } from './kill-session.component';

describe('KillSessionComponent', () => {
  let component: KillSessionComponent;
  let fixture: ComponentFixture<KillSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
