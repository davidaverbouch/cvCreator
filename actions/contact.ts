'use server';

import { redirect } from 'next/navigation';

export const ContactMe = async (_prevState: any, formData: any) => {
  'use server';
  const title = formData.get('title');
  const content = formData.get('content');
  console.log({ title, content });
  redirect('/');
};
