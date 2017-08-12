import { Action } from '@ngrx/store';
import { Inquiry } from '../models/inquiry';

export const REQUEST = '[Inquiry] Request';
export const REQUEST_COMPLETE = '[Inquiry] Request Complete';
export const REQUEST_SUCCESS = '[Inquiry] Request Success';
export const REQUEST_FAILED = '[Inquiry] Request Failed';

export class RequestAction implements Action {
  readonly type = REQUEST;
  constructor(public payload: string) {}
}

export class RequestCompleteAction implements Action {
  readonly type = REQUEST_COMPLETE;
  constructor(public payload: string) {}
}

export class RequestSuccessAction implements Action {
  readonly type = REQUEST_SUCCESS;
  constructor(public payload: string) {}
}

export class RequestFailedAction implements Action {
  readonly type = REQUEST_FAILED;
  constructor(public payload: string) {}
}

export type Actions =
  | RequestAction
  | RequestCompleteAction
  | RequestSuccessAction
  | RequestFailedAction;
