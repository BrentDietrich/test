import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';

import * as reportsAction from '../actions/reports';
import { Report } from '../models/report';

@Injectable()
export class ReportsEffects {
  constructor(private actions$: Actions) {}
  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   *
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the database open call in `defer` makes
   * effect easier to test.
   */
  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    // return this.db.open('books_app');
  });

  // @Effect() loadReports$: Observable<Action> = this.actions$
  //   .ofType(reportsAction.LOAD_ALL)
  //   .map(() => {
  //     // console.log('test');
  //     let dev: Report[] = [];
  //     return new reportsAction.LoadSuccessAction(dev);
  //   });

              // private db: Database) {}
}
