'use server';

import { redirect } from 'next/navigation';

export const UpsertIdentity = async (_prevState: any, formData: FormData) => {
  'use server';
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const birthday = formData.get('birthday');
  const phone = formData.get('phone');
  const email = formData.get('email');
  const address = formData.get('address');
  const driveLicence = formData.get('driveLicence');
  const sex = formData.get('sex');
  console.log({ firstName, lastName, birthday, phone, email, address, driveLicence, sex });
  redirect('/makeIt');
};
