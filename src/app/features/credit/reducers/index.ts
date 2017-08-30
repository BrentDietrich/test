import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import * as fromInquiry from './inquiry';
import * as fromReports from './reports';
// import * as fromReports from './reducer';

export interface CreditState {
  inquiry: fromInquiry.State;
  reports: fromReports.State;
}

export interface State extends fromRoot.State {
  'credit': CreditState;
}

export const reducers = {
  inquiry: fromInquiry.reducer,
  reports: fromReports.reducer,
};

export const getReportsState = createFeatureSelector<CreditState>('credit');


export const getReportEntitiesState = createSelector(
  getReportsState,
  (state: CreditState) => state.reports
);
export const getReportEntities = createSelector(
  getReportEntitiesState,
  fromReports.getEntities
);
export const getReportIds = createSelector(
  getReportEntitiesState,
  fromReports.getIds
);
export const getSelectedReportId = createSelector(
  getReportEntitiesState,
  fromReports.getSelectedId
);
export const getSelectedReport = createSelector(
  getReportEntitiesState,
  fromReports.getSelected
);

export const getReports = createSelector(
  getReportEntities,
  getReportIds,
  (entities, ids) => {
    return ids.map(id => entities[id]);
  }
);
