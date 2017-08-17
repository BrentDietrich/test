export interface BuyerAddress {
  id: string;
  type: string; // own or rent
  zipCode: number;
  city: string;
  county: string;
  state: string;
  yearsAtAddress: number;
  monthsAtAddress: number;
}
