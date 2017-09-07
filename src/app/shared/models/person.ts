import { Address } from './address';

export interface Person {
  id: string;
  type: string; // person category type
  firstName: string;
  middleInitial?: string;
  lastName: string;
  suffix?: string;
  birthDate?: Date;
  emailPrimary?: string;
  emailSecondary?: string;
  phonePrimary?: string;
  phoneSecondary?: string;
  cellPhone?: string;
  faxNumber?: string;
  address?: Address;
}
