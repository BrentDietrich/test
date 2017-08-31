import { reducer } from './collection';
import * as fromCollection from './collection';
import {
  LoadAction,
  LoadSuccessAction,
  LoadFailAction,
} from '../actions/collection';
import { Report } from '../models/report';

describe('ReportsCollectionReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromCollection.initialState);
    });
  });

});
