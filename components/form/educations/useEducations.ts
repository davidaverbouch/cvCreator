'use client';

import { Action } from '@/actions/interfaces';
import { Education } from '@/lib/interfaces';
import { useActionState, useState } from 'react';

export const useEducations = ({ action, datas }: Action & { datas: Education[] }) => {
  const [, formAction] = useActionState(action, undefined);
  const [newEducation, setNewEducation] = useState<Education>({
    school: '',
    city: '',
    year: new Date().getFullYear(),
    duration: 1,
  });
  const [educations, setEducations] = useState<Education[]>(datas ?? []);
  const [errors, setErrors] = useState<Record<string, boolean>>({
    school: false,
    city: false,
    year: false,
    duration: false,
  });

  const handleSetNewEducation = (key: string, value: string | number) => {
    setNewEducation({ ...newEducation, [key]: value });
    setErrors({ ...errors, [key]: !value });
  };

  const handleAddEducation = () => {
    if (!newEducation.school || !newEducation.city || !newEducation.year || !newEducation.duration) {
      setErrors({
        school: !newEducation.school,
        city: !newEducation.city,
        year: !newEducation.year,
        duration: !newEducation.duration,
      });
      return;
    }
    setEducations([...educations, newEducation]);
    setNewEducation({
      school: '',
      city: '',
      year: new Date().getFullYear(),
      duration: 1,
    });
    setErrors({
      school: false,
      city: false,
      year: false,
      duration: false,
    });
  };

  const handleUpdateEducation = (index: number, key: string, value: string | number) => {
    console.log({ index, key, value });
    setEducations(educations.map((education, i) => (i === index ? { ...education, [key]: value } : education)));
  };

  return {
    formAction,
    errors,
    educations,
    newEducation,
    handleSetNewEducation,
    handleUpdateEducation,
    handleAddEducation,
  };
};
