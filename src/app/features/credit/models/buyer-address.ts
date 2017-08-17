import { Address } from './../../../shared/models';
export interface BuyerAddress extends Address {
  ownOrRent: string; // own or rent
  yearsAtAddress: number;
  monthsAtAddress: number;
}
