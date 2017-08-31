import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import * as fromInquiry from './inquiry';
import * as fromReports from './reports';
import * as fromCollection from './collection';

export interface CreditReportsState {
  inquiry: fromInquiry.State;
  reports: fromReports.State;
  collection: fromCollection.State;
}

export interface State extends fromRoot.State {
  'creditReports': CreditReportsState;
}

export const reducers = {
  inquiry: fromInquiry.reducer,
  reports: fromReports.reducer,
  collection: fromCollection.reducer,
};

export const getReportsState = createFeatureSelector<CreditReportsState>('creditReports');


export const getReportEntitiesState = createSelector(
  getReportsState,
  (state: CreditReportsState) => state.reports
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
