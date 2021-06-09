import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AksesPenggunaComponent } from './akses-pengguna.component';

describe('AksesPenggunaComponent', () => {
  let component: AksesPenggunaComponent;
  let fixture: ComponentFixture<AksesPenggunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AksesPenggunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AksesPenggunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
