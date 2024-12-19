import { User } from '../interfaces';

export const defaultUser: User = {
  id: 0,
  sex: 'Mr',
  firstName: 'firstname',
  lastName: 'lastname',
  birthday: new Date(Date.now()),
  phone: 'xx xx xx xx xx',
  email: 'name@mail.com',
  address: 'xx street, zipcode city',
  driveLicence: 'B',
};
