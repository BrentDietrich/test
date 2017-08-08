import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreditReportsComponent } from './credit-reports/credit-reports.component';
import { CreditInquiryComponent } from './credit-inquiry/credit-inquiry.component';

const routes: Routes = [{
    path: 'credit',
    children: [{
      path: '',
      component: CreditReportsComponent,
    }, {
      path: 'check',
      component: CreditInquiryComponent,
    // }, {
    //   path: ':id/edit',
    //   component: UsersFormComponent,
    }],
}];

export const creditRoutes: ModuleWithProviders = RouterModule.forChild(routes);
