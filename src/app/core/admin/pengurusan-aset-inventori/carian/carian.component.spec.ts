import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianComponent } from './carian.component';

describe('CarianComponent', () => {
  let component: CarianComponent;
  let fixture: ComponentFixture<CarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
