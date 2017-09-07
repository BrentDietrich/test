import { Person } from './../../../shared/models';
import { BuyerAddress } from './buyer-address';
import { BuyerLicense } from './buyer-license';
import { BuyerEmployer } from './buyer-employer';

export interface Buyer extends Person {
  ssn: string;
  licence: BuyerLicense;
  currentAddress: BuyerAddress;
  previousAddress: BuyerAddress;
  employer: BuyerEmployer;
}
