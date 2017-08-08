
import { Action } from '@ngrx/store';
import { Inquiry } from '../models/inquiry';

export const CHECK = '[Inquiry] Credit Check';
export const CHECK_COMPLETE = '[Inquiry] Check Complete';
export const LOAD_REPORT = '[Inquiry] Load Report';

export class CheckAction implements Action {
  readonly type = CHECK;
  constructor(public payload: string) {}
}

export class CheckCompleteAction implements Action {
  readonly type = CHECK_COMPLETE;
  constructor(public payload: string) {}
}

export class LoadReportAction implements Action {
  readonly type = LOAD_REPORT;
  constructor(public payload: string) {}
}

export type Actions =
  | CheckAction
  | CheckCompleteAction
  | LoadReportAction;
