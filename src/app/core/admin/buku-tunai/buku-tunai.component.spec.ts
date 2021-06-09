import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BukuTunaiComponent } from './buku-tunai.component';

describe('BukuTunaiComponent', () => {
  let component: BukuTunaiComponent;
  let fixture: ComponentFixture<BukuTunaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BukuTunaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuTunaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
