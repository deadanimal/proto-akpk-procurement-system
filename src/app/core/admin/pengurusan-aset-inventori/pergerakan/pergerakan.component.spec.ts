import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PergerakanComponent } from './pergerakan.component';

describe('PergerakanComponent', () => {
  let component: PergerakanComponent;
  let fixture: ComponentFixture<PergerakanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PergerakanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PergerakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
