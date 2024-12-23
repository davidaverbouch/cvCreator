'use server';

import { Skill } from '@/lib/interfaces';
import { redirect } from 'next/navigation';

export const UpsertSkill = async (_prevState: any, formData: FormData) => {
  'use server';
  const skills: Skill[] = [];
  for (const [path, value] of formData) {
    const [index, key] = path.split('.');
    if (Number.isNaN(index)) continue;

    const skill = { [key]: key === 'is_main' || key === 'level' ? Number(value) : value };
    skills[Number(index)] = { ...skills[Number(index)], ...skill };
  }
  console.log({ skills });
  redirect('/makeIt');
};
