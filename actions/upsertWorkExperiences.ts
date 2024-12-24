'use server';

import { Education } from '@/lib/interfaces';
import { redirect } from 'next/navigation';

export const UpsertWorkExperiences = async (_prevState: any, formData: FormData) => {
  'use server';
  const workExperiences: Education[] = [];
  for (const [path, value] of formData) {
    const [index, key] = path.split('.');
    if (Number.isNaN(index) || !key) continue;

    const workExperience = { [key]: key === 'year' || key === 'duration' || key === 'is_esn' ? Number(value) : value };
    workExperiences[Number(index)] = { ...workExperiences[Number(index)], ...workExperience };
  }
  console.log({ workExperiences });
  redirect('/makeIt');
};
