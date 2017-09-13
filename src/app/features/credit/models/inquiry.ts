import { BuyerInquiry } from './buyer-inquiry';

export interface Inquiry {
  primary: BuyerInquiry;
  coBuyer: BuyerInquiry;
}
