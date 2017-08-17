export interface Address {
  id: string;
  zipCode: number;
  city: string;
  state: string;
  county?: string;
  country?: string;
  type?: string; // home, apartment
}
