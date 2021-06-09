import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KataLaluanPenggunaComponent } from './kata-laluan-pengguna.component';

describe('KataLaluanPenggunaComponent', () => {
  let component: KataLaluanPenggunaComponent;
  let fixture: ComponentFixture<KataLaluanPenggunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KataLaluanPenggunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KataLaluanPenggunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
