import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KawalanBajetComponent } from './kawalan-bajet.component';

describe('KawalanBajetComponent', () => {
  let component: KawalanBajetComponent;
  let fixture: ComponentFixture<KawalanBajetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KawalanBajetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KawalanBajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
