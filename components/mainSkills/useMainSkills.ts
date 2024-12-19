import { Skill } from '@/lib/interfaces';

export const useMainSkills = ({ skills }: { skills: Skill[] }) => {
  return skills?.filter(skill => skill.is_main);
};
