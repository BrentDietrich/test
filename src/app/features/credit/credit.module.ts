import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CovalentLoadingModule, CovalentDialogsModule, CovalentMediaModule, CovalentLayoutModule,
         CovalentSearchModule, CovalentCommonModule } from '@covalent/core';
// import { TdDynamicType, ITdDynamicElementConfig,
  // TdDynamicElement, ITdDynamicElementValidator, TdDynamicFormsComponent } from '@covalent/dynamic-forms';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

import { MaterialLoadModule } from '../../shared/material.module';
import { CreditComponent } from './credit.component';
import { CreditReportsComponent } from './credit-reports/credit-reports.component';
import { CreditInquiryComponent } from './credit-inquiry/credit-inquiry.component';
import { creditRoutes } from './credit-routes';
import { CreditSettingsComponent } from './credit-settings/credit-settings.component';
import { reducers } from './reducers';
import { CollectionEffects } from './effects/collection';
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
    CovalentDynamicFormsModule,
    /** custom */
    StoreModule.forFeature('creditReports', reducers ),
    EffectsModule.forFeature([CollectionEffects]),
    creditRoutes,
    MaterialLoadModule,
  ],
  declarations: [
    CreditComponent,
    CreditInquiryComponent,
    CreditReportsComponent,
    CreditSettingsComponent
  ]
})
export class CreditModule { }
