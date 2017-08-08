import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardProductComponent } from './components/dashboard-product/dashboard-product.component';
import { ProductOverviewComponent } from './components/dashboard-product/overview/overview.component';
import { ProductStatsComponent } from './components/dashboard-product/stats/stats.component';
import { ProductFeaturesComponent } from './components/dashboard-product/features/features.component';
import { FeaturesFormComponent } from './components/dashboard-product/features/form/form.component';
import { LogsComponent } from './components/logs/logs.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                component: DashboardComponent,
                path: '',
            },
            {
                path: 'product',
                component: DashboardProductComponent,
                children: [
                    {
                        path: '',
                        component: ProductOverviewComponent
                    },
                    {
                        path: 'stats',
                        component: ProductStatsComponent
                    },
                    {
                        path: 'features',
                        children: [
                            {
                                path: '',
                                component: ProductFeaturesComponent
                            },
                            {
                                path: 'add',
                                component: FeaturesFormComponent
                            },
                            {
                                path: ':id/delete',
                                component: FeaturesFormComponent
                            },
                            {
                                path: ':id/edit',
                                component: FeaturesFormComponent
                            },
                        ]
                    },
                ]
            },
            {
                path: 'item/:id',
                component: DetailComponent
            },
            {
                path: 'logs',
                component: LogsComponent
            },
            {
                path: 'form',
                component: FormComponent
            },
            { path: '', loadChildren: './features/users/users.module#UsersModule' },
            { path: '', loadChildren: './features/credit/credit.module#CreditModule' },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
          routes, {
            useHash: true,
            // enableTracing: true // <-- debugging purposes only
         },
        ),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
    MainComponent, LoginComponent,
    DashboardComponent, DashboardProductComponent,
    FormComponent, LogsComponent, DetailComponent,
    FeaturesFormComponent, ProductFeaturesComponent, ProductOverviewComponent, ProductStatsComponent,
];
