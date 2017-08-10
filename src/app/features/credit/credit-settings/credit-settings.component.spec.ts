import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditSettingsComponent } from './credit-settings.component';

describe('CreditSettingsComponent', () => {
  let component: CreditSettingsComponent;
  let fixture: ComponentFixture<CreditSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
