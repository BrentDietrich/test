import { Address } from './address';

export interface Person {
  id: string;
  type: string; // person category type
  firstName: string;
  middleInitial?: string;
  lastName: string;
  suffix?: string;
  birthDate?: Date;
  email?: string;
  phone?: string;
  phone2?: string;
  cellPhone?: string;
  faxNumber?: string;
  address?: Address;
}
