import { Address } from './../../../shared/models';
export interface BuyerAddress extends Address {
  isCurrent: boolean;
  // ownOrRent: string; // own or rent
  yearsAtAddress: number;
  monthsAtAddress: number;
}
