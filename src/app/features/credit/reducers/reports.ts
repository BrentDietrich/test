import { createSelector } from '@ngrx/store';

import * as reportsAction from '../actions/reports';
import { Report } from '../models/report';

export interface State {
  // loaded: boolean;
  // loading: boolean;
  entities: { [id: string]: Report };
  ids: string[];
  selectedReportId: string;
}

export const initialState: State = {
  // loaded: false,
  // loading: false,
  entities: {},
  ids: [],
  selectedReportId: null,
};

export function reducer(
  state = initialState,
  action: reportsAction.Actions
): State {
  switch (action.type) {


    case reportsAction.LOAD_SUCCESS: {
      const reports = action.payload;
      // console.log('reports', reports);
      const newReports = reports.filter(report => !state.entities[report.id]);
      const newReportIds = newReports.map(report => report.id);
      const newReportEntities = newReports.reduce(
        (entities: { [id: string]: Report }, report: Report) => {
          return Object.assign(entities, {
            [report.id]: report,
          });
        },
        {}
      );
      return {
        // loaded: true,
        // loading: false,
        ids: [...state.ids, ...newReportIds],
        entities: Object.assign({}, state.entities, newReportEntities),
        selectedReportId: state.selectedReportId,
      };
    }

    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedReportId;

export const getSelected = createSelector(
  getEntities,
  getSelectedId,
  (entities, selectedId) => {
    return entities[selectedId];
  }
);

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
