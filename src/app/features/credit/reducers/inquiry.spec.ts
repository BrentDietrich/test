import { reducer } from './inquiry';
import * as fromInquiry from './inquiry';
import {
  RequestAction,
  RequestCompleteAction,
  RequestSuccessAction,
  RequestFailedAction,
} from '../actions/inquiry';
import { Inquiry } from '../models/inquiry';
// import { LoadSuccessAction } from '../actions/collection';

describe('InquiryReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromInquiry.initialState);
    });
  });
});
