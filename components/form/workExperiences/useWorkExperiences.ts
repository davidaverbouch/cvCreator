import { Action } from '@/actions/interfaces';
import { WorkExperience } from '@/lib/interfaces';
import { MouseEvent, useActionState, useState } from 'react';

export const useWorkExperiences = ({ action, datas }: Action & { datas: WorkExperience[] }) => {
  const [, formAction] = useActionState(action, undefined);
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>(datas.sort((a, b) => b.year - a.year) ?? []);

  const [currentCompany, setCurrentCompany] = useState<number>(0);

  const handleSelectCompany = (e: MouseEvent, index: number) => {
    e.preventDefault();
    setCurrentCompany(index);
  };

  const handleAddCompany = () => {
    setWorkExperiences([
      ...workExperiences,
      {
        company_name: '',
        duration: 1,
        esn_name: '',
        is_esn: 0,
        title: '',
        year: new Date().getFullYear(),
      },
    ]);

    setCurrentCompany(workExperiences.length);
  };

  const handleUpdateSkill = (index: number, key: string, value: string | number) => {
    console.log({ index, key, value });
    if (!workExperiences[currentCompany]) return;
    setWorkExperiences(
      workExperiences.map((workExperience, idx) =>
        index === idx ? { ...workExperience, [key]: value } : workExperience
      )
    );
    if (key === 'is_esn' && value === 0)
      setWorkExperiences(
        workExperiences.map((workExperience, idx) =>
          index === idx ? { ...workExperience, esn_name: '' } : workExperience
        )
      );
  };

  return {
    formAction,
    workExperiences,
    currentCompany,
    handleSelectCompany,
    handleAddCompany,
    handleUpdateSkill,
  };
};
