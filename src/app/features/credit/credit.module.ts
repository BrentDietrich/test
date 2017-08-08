import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { CovalentLoadingModule, CovalentDialogsModule, CovalentMediaModule, CovalentLayoutModule,
         CovalentSearchModule, CovalentCommonModule } from '@covalent/core';
import { MaterialLoadModule } from '../../shared/material.module';

import { CreditInquiryComponent } from './credit-inquiry/credit-inquiry.component';
import { CreditReportsComponent } from './credit-reports/credit-reports.component';
import { reducers } from './reducers';
import { creditRoutes } from './credit-routes';

@NgModule({
  imports: [
    /** angular */
    CommonModule,
    FormsModule,
    RouterModule,
    /** covalent modules */
    CovalentLoadingModule,
    CovalentDialogsModule,
    CovalentMediaModule,
    CovalentLayoutModule,
    CovalentSearchModule,
    CovalentCommonModule,
    /** custom */
    StoreModule.forFeature('credit', reducers ),
    creditRoutes,
    MaterialLoadModule,
  ],
  declarations: [
    CreditInquiryComponent,
    CreditReportsComponent
  ]
})
export class CreditModule { }
