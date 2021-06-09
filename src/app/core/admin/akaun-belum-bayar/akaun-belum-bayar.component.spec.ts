import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkaunBelumBayarComponent } from './akaun-belum-bayar.component';

describe('AkaunBelumBayarComponent', () => {
  let component: AkaunBelumBayarComponent;
  let fixture: ComponentFixture<AkaunBelumBayarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkaunBelumBayarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkaunBelumBayarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
