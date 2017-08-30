import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CovalentLoadingModule, CovalentDialogsModule, CovalentMediaModule, CovalentLayoutModule,
         CovalentSearchModule, CovalentCommonModule } from '@covalent/core';
import { MaterialLoadModule } from '../../shared/material.module';

import { CreditInquiryComponent } from './credit-inquiry/credit-inquiry.component';
import { CreditReportsComponent } from './credit-reports/credit-reports.component';
import { creditRoutes } from './credit-routes';
import { CreditSettingsComponent } from './credit-settings/credit-settings.component';
import { reducers } from './reducers';
import { ReportsEffects } from './effects/reports';

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
    EffectsModule.forFeature([ReportsEffects]),
    creditRoutes,
    MaterialLoadModule,
  ],
  declarations: [
    CreditInquiryComponent,
    CreditReportsComponent,
    CreditSettingsComponent
  ]
})
export class CreditModule { }
