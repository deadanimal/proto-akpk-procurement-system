import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KandunganPortalComponent } from './kandungan-portal.component';

describe('KandunganPortalComponent', () => {
  let component: KandunganPortalComponent;
  let fixture: ComponentFixture<KandunganPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KandunganPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KandunganPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
