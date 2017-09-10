import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

import { SharedModule } from '../../../shared/shared.module';
import { MaterialLoadModule } from '../../../shared/material.module';
import { CreditInquiryComponent } from './credit-inquiry.component';

describe('CreditInquiryComponent', () => {
  let component: CreditInquiryComponent;
  let fixture: ComponentFixture<CreditInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MaterialLoadModule,
        CovalentDynamicFormsModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      declarations: [ CreditInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
