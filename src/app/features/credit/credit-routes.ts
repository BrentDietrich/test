import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreditComponent } from './credit.component';
import { CreditReportsComponent } from './credit-reports/credit-reports.component';
import { CreditInquiryComponent } from './credit-inquiry/credit-inquiry.component';

const routes: Routes = [{
    path: 'credit',
    component: CreditComponent,
    children: [{
      path: '',
      component: CreditReportsComponent,
    }, {
      path: 'inquiry',
      component: CreditInquiryComponent,
    // }, {
    //   path: ':id/edit',
    //   component: UsersFormComponent,
    }],
}];

export const creditRoutes: ModuleWithProviders = RouterModule.forChild(routes);
