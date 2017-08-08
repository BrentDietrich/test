import { createSelector } from '@ngrx/store';
import { Inquiry } from '../models/inquiry';
import * as inquiry from '../actions/inquiry';

export interface State {
  id: string;
  checking: boolean;
  report: any;
}

export const initialState: State = {
  id: '',
  checking: false,
  report: null
};

export function reducer(
  state = initialState,
  action: inquiry.Actions
): State {
  switch (action.type) {

    case inquiry.CHECK: {
      return Object.assign({}, state, {
        checking: true,
      });
    }

    default: {
      return state;
    }
  }
}
