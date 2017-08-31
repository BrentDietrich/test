import { Action } from '@ngrx/store';
import { Report } from '../models/report';

export const LOAD_SELECTED =        '[Report] Load Selected';
export const LOAD_SUCCESS =         '[Report] Load Success';
export const LOAD_FAIL =            '[Report] Load Fail';

/**
 * Reports Actions
 */

export class LoadSelectedAction implements Action {
  readonly type = LOAD_SELECTED;

  constructor(public payload: Report) {}
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Report[]) {}
  // constructor(public payload: any) {}
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

export type Actions = 
  | LoadSelectedAction
  | LoadSuccessAction
  | LoadFailAction;


// TODO: change reports.ts -> report.ts
