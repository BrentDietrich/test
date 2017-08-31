import { reducer } from './reports';
import * as fromReports from './reports';
import {
  LoadSelectedAction,
  LoadSuccessAction,
  LoadFailAction,
} from '../actions/reports';
import { Report } from '../models/report';

describe('ReportsReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromReports.initialState);
    });
  });

  // describe('SEARCH_COMPLETE & LOAD_SUCCESS', () => {
  describe('LOAD_SUCCESS', () => {
    function noExistingReports(action: any) {
      const report1 = { id: '111' } as Report;
      const report2 = { id: '222' } as Report;
      const createAction = new action([report1, report2]);

      const expectedResult = {
        ids: ['111', '222'],
        entities: {
          '111': report1,
          '222': report2,
        },
        selectedReportId: null,
      };

      const result = reducer(fromReports.initialState, createAction);
      expect(result).toEqual(expectedResult);
    }

    function existingReports(action: any) {
      const report1 = { id: '111' } as Report;
      const report2 = { id: '222' } as Report;
      const initialState = {
        ids: ['111', '222'],
        entities: {
          '111': report1,
          '222': report2,
        },
        selectedReportId: null,
      } as any;
      // should not replace existing books
      const differentReport2 = { id: '222', foo: 'bar' } as any;
      const report3 = { id: '333' } as Report;
      const createAction = new action([report3, differentReport2]);

      const expectedResult = {
        ids: ['111', '222', '333'],
        entities: {
          '111': report1,
          '222': report2,
          '333': report3,
        },
        selectedReportId: null,
      };

      const result = reducer(initialState, createAction);
      expect(result).toEqual(expectedResult);
    }

    it('should add all reports in the payload when none exist', () => {
      // noExistingReports(SearchCompleteAction);
      noExistingReports(LoadSuccessAction);
    });

    it('should add only new reports when reports already exist', () => {
      // existingReports(SearchCompleteAction);
      existingReports(LoadSuccessAction);
    });
  });

  describe('Selections', () => {
    const report1 = { id: '111' } as Report;
    const report2 = { id: '222' } as Report;
    const state: fromReports.State = {
      entities: {
        '111': report1,
        '222': report2,
      },
      ids: ['111', '222'],
      selectedReportId: '111',
    };

    describe('getEntities', () => {
      it('should return entities', () => {
        const result = fromReports.getEntities(state);
        expect(result).toBe(state.entities);
      });
    });

    describe('getIds', () => {
      it('should return ids', () => {
        const result = fromReports.getIds(state);
        expect(result).toBe(state.ids);
      });
    });

    describe('getSelectedId', () => {
      it('should return the selected id', () => {
        const result = fromReports.getSelectedId(state);
        expect(result).toBe('111');
      });
    });

    describe('getSelected', () => {
      it('should return the selected report', () => {
        const result = fromReports.getSelected(state);
        expect(result).toBe(report1);
      });
    });

    describe('getAll', () => {
      it('should return all reports as an array ', () => {
        const result = fromReports.getAll(state);
        expect(result).toEqual([report1, report2]);
      });
    });
  });

});
