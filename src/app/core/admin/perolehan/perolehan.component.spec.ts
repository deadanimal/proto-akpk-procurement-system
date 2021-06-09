import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerolehanComponent } from './perolehan.component';

describe('PerolehanComponent', () => {
  let component: PerolehanComponent;
  let fixture: ComponentFixture<PerolehanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerolehanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerolehanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
