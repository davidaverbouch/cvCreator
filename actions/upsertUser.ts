'use server';

import { redirect } from 'next/navigation';

export const UpsertUser = async (_prevState: any, formData: FormData) => {
  'use server';
  const title = formData.get('title');
  const face = formData.get('face');
  const description = formData.get('description');
  const mindset = formData.get('mindset');
  console.log({ title, face, description, mindset });
  redirect('/makeIt');
};
