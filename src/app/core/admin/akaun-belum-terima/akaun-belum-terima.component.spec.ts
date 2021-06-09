import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkaunBelumTerimaComponent } from './akaun-belum-terima.component';

describe('AkaunBelumTerimaComponent', () => {
  let component: AkaunBelumTerimaComponent;
  let fixture: ComponentFixture<AkaunBelumTerimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkaunBelumTerimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkaunBelumTerimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
