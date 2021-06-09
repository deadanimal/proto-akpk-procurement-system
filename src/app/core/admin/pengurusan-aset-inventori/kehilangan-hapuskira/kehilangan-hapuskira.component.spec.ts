import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KehilanganHapuskiraComponent } from './kehilangan-hapuskira.component';

describe('KehilanganHapuskiraComponent', () => {
  let component: KehilanganHapuskiraComponent;
  let fixture: ComponentFixture<KehilanganHapuskiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KehilanganHapuskiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KehilanganHapuskiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
