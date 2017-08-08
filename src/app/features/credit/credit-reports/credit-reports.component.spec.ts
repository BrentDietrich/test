import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditReportsComponent } from './credit-reports.component';

describe('CreditReportsComponent', () => {
  let component: CreditReportsComponent;
  let fixture: ComponentFixture<CreditReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
