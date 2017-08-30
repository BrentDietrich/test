import { createSelector } from '@ngrx/store';
import { Report } from '../models/report';
import * as inquiry from '../actions/inquiry';

export interface State {
  id: string;
  checking: boolean;
  data: any;
}

export const initialState: State = {
  id: '',
  checking: false,
  data: null
};

export function reducer(
  state = initialState,
  action: inquiry.Actions
): State {
  switch (action.type) {

    case inquiry.REQUEST: {
      return Object.assign({}, state, {
        checking: true,
      });
    }

    default: {
      return state;
    }
  }
}
