import { Action } from '@/actions/interfaces';
import { useCategorizeSkills } from '@/app/hooks/useSkills';
import { Skill } from '@/lib/interfaces';
import { MouseEvent, useActionState, useState } from 'react';

export const useSkills = ({ action, datas }: Action & { datas: Skill[] }) => {
  const skillsAdapted = useCategorizeSkills({ skills: datas });
  const [, formAction] = useActionState(action, undefined);
  const [newCategory, setNewCategory] = useState<string | undefined>();
  const [newSkill, setNewSkill] = useState<Skill>({
    category: '',
    name: '',
    duration: 0,
    level: 0,
    is_main: 0,
  });
  const [skills, setSkills] = useState<Record<string, Skill[]>>({
    Technologies: skillsAdapted['Technologies'] ?? [],
    Methodologies: skillsAdapted['Methodologies'] ?? [],
    Tools: skillsAdapted['Outils'] ?? [],
    Languages: skillsAdapted['Langues'] ?? [],
  });
  const [currentCategory, setCurrentCategory] = useState<string>(Object.keys(skills)[0]);

  const handleSelectCategory = (e: MouseEvent, category: string) => {
    e.preventDefault();
    setCurrentCategory(category);
  };

  const handleAddCategory = () => {
    if (!newCategory) return;
    setSkills({ ...skills, [newCategory]: [] });
    setNewCategory('');
  };

  const handleAddSkill = () => {
    if (!newSkill || !currentCategory) return;
    const skill = [...skills[currentCategory], { ...newSkill, category: currentCategory }];
    setSkills({ ...skills, [currentCategory]: skill });
    setNewSkill({
      category: '',
      name: '',
      duration: 0,
      level: 0,
      is_main: 0,
    });
  };

  const handleUpdateSkill = (index: number, key: string, value: string | number) => {
    console.log({ index, key, value });
    if (!currentCategory) return;
    const skill = skills[currentCategory];
    skill[index] = { ...skill[index], [key]: value };
    setSkills({ ...skills, [currentCategory]: skill });
  };

  return {
    formAction,
    newCategory,
    setNewCategory,
    newSkill,
    setNewSkill,
    skills,
    currentCategory,
    setCurrentCategory,
    handleSelectCategory,
    handleAddCategory,
    handleAddSkill,
    handleUpdateSkill,
  };
};
