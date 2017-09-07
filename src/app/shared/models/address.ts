export interface Address {
  id: string;
  city: string;
  county?: string;
  country?: string;
  postalCode: number;
  state: string;
  type?: string; // home, apartment
}
