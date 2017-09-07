import { Buyer } from './buyer';

export interface BuyerInquiry extends Buyer {
  isPrimaryBorrower: boolean;
}
