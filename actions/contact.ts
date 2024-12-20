'use server';

import { redirect } from 'next/navigation';

export const ContactMe = async (_prevState: any, formData: FormData) => {
  'use server';
  const title = formData.get('title');
  const content = formData.get('content');
  console.log({ title, content });
  redirect('/');
};
