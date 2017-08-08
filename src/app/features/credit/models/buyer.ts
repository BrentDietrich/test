import { BuyerAddress } from './buyer-address';
import { BuyerLicense } from './buyer-license';
import { BuyerEmployer } from './buyer-employer';

export interface Buyer {
  id: string;
  type: string; // main / spouse / cobuyer
  firstName: string;
  middleInitial: string;
  lastName: string;
  suffix: string;
  ssn: string;
  birthDate: Date;
  licence: BuyerLicense;
  currentAddress: BuyerAddress;
  previousAddress: BuyerAddress;
  employer: BuyerEmployer;
  homePhone: string;
  cellPhone?: string;
  faxPhone?: string;
  email?: string;
}
