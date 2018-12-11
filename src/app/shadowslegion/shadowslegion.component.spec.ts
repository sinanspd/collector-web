import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowslegionComponent } from './shadowslegion.component';

describe('ShadowslegionComponent', () => {
  let component: ShadowslegionComponent;
  let fixture: ComponentFixture<ShadowslegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowslegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowslegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
