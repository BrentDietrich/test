import { Person } from './../../../shared/models';
import { BuyerAddress } from './buyer-address';
import { BuyerLicense } from './buyer-license';
import { BuyerEmployer } from './buyer-employer';

export interface Buyer extends Person {
  buyerType: string; // main / spouse / cobuyer
  ssn: string;
  licence: BuyerLicense;
  currentAddress: BuyerAddress;
  previousAddress: BuyerAddress;
  employer: BuyerEmployer;
}
