'use server';

import { Education } from '@/lib/interfaces';
import { redirect } from 'next/navigation';

export const UpsertEducation = async (_prevState: any, formData: FormData) => {
  'use server';
  const educations: Education[] = [];
  for (const [path, value] of formData) {
    const [index, key] = path.split('.');
    if (Number.isNaN(index)) continue;

    const education = { [key]: key === 'year' || key === 'duration' ? Number(value) : value };
    educations[Number(index)] = { ...educations[Number(index)], ...education };
  }
  console.log({ educations });
  redirect('/makeIt');
};
