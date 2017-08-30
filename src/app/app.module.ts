import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/** Third party */
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
/** Custom */
import { AppComponent } from './app.component';
import { RequestInterceptor } from '../config/interceptors/request.interceptor';
import { MOCK_API } from '../config/api.config';
import { routedComponents, AppRoutingModule } from './app-routing.module';

import { MaterialLoadModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';

import { reducers, metaReducers } from './reducers';
import { schema } from './db';
import { USER_PROVIDER, USERS_API } from './features/users';
import { environment } from '../environments/environment';

const httpInterceptorProviders: Type<any>[] = [
  RequestInterceptor,
];

export function getAPI(): string {
  return MOCK_API;
}

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
  ],
  imports: [
    AppRoutingModule,
    /** Angular */
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    /** Covalent */
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    /** Ngrx */
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    DBModule.provideDB(schema),
    /** Material mods must go last */
    MaterialLoadModule,
  ],
  providers: [
    httpInterceptorProviders,
    Title, {
      provide: USERS_API, useFactory: getAPI,
    }, USER_PROVIDER,
  ],
  entryComponents: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
