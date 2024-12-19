import { UserCV } from '../interfaces';
import { defaultEducations } from './educations';
import { defaultSkills } from './skills';
import { defaultWorkexperiences } from './workExperiences';

export const defaultCV: UserCV = {
  id: 0,
  description: 'A little description of your capacities and what you like.',
  educations: defaultEducations,
  first_name: 'firstname',
  last_name: 'lastname',
  face: 'default',
  title: 'Title',
  mindset: 'intelligent, smart, problem solver',
  skills: defaultSkills,
  workExperiences: defaultWorkexperiences,
};
