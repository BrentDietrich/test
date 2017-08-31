import { Action } from '@ngrx/store';
import { Report } from '../models/report';

export const LOAD =           '[Reports Collection] Load';
export const LOAD_SUCCESS =   '[Reports Collection] Load Success';
export const LOAD_FAIL =      '[Reports Collection] Load Fail';

/**
 * Load Reports Collection Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Report[]) {}
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
