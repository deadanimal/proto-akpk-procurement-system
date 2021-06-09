import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparanKewanganComponent } from './paparan-kewangan.component';

describe('PaparanKewanganComponent', () => {
  let component: PaparanKewanganComponent;
  let fixture: ComponentFixture<PaparanKewanganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaparanKewanganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaparanKewanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
