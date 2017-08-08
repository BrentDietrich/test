import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
} from '@ngrx/store';

// import * as fromRoot from '../../../reducers';
import * as fromInquiry from './inquiry';
// import * as fromReports from './reducer';

export interface CreditState {
  inquiry: fromInquiry.State;
}
// export interface State extends fromRoot.State {
export interface State {
  'credit': CreditState;
}
export const reducers = {
  inquiry: fromInquiry.reducer,
};

export const getInquiryState = createFeatureSelector<CreditState>('credit');
