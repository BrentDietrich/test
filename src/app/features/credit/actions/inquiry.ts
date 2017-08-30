import { Action } from '@ngrx/store';
import { Report } from '../models/report';

export const REQUEST =              '[Inquiry] Request';
export const REQUEST_SUCCESS =      '[Inquiry] Request Success';
export const REQUEST_FAIL =         '[Inquiry] Request Fail';

export class RequestAction implements Action {
  readonly type = REQUEST;
  constructor(public payload: string) {}
}

export class RequestSuccessAction implements Action {
  readonly type = REQUEST_SUCCESS;
  constructor(public payload: string) {}
}

export class RequestFailAction implements Action {
  readonly type = REQUEST_FAIL;
  constructor(public payload: string) {}
}

export type Actions =
  | RequestAction
  | RequestSuccessAction
  | RequestFailAction;
