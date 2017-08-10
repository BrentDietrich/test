import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../../../shared/shared.module';
import { MaterialLoadModule } from '../../../shared/material.module';

import { CreditReportsComponent } from './credit-reports.component';

describe('CreditReportsComponent', () => {
  let component: CreditReportsComponent;
  let fixture: ComponentFixture<CreditReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MaterialLoadModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
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
