import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TandaTanganComponent } from './tanda-tangan.component';

describe('TandaTanganComponent', () => {
  let component: TandaTanganComponent;
  let fixture: ComponentFixture<TandaTanganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TandaTanganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TandaTanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
