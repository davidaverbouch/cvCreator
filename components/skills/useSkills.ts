import { Skill } from '@/lib/interfaces';

export const useSkills = ({ skills }: { skills: Skill[] }) => {
  return skills?.reduce<Record<string, Skill[]>>((acc, skill) => {
    const cat = skill.category;
    acc[cat] ? (acc[cat] = [...acc[cat], skill]) : (acc[cat] = [skill]);
    return acc;
  }, {});
};
