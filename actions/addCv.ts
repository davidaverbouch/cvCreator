'use server';

import { getUserCV, insertCV } from '@/lib/methods/cv';
import { insertEducation, insertEducationIntoCV } from '@/lib/methods/education';
import { insertSkillIntoCV, insertSkills } from '@/lib/methods/skills';
import { insertWorkExperience, insertWorkExperienceIntoCV } from '@/lib/methods/workExperience';

export const CreateCV = async () => {
  const cv = insertCV({ firstName: 'David', lastName: 'Averbouch' });
  const ed1 = insertEducation({ year: 2008, duration: 2, school: 'UPMC', city: 'Paris' });
  const ed2 = insertEducation({ year: 2010, duration: 1, school: 'Polytech', city: 'Nice' });

  const xp1 = insertWorkExperience({ year: 2011, duration: 1, company_name: 'Capgemini', is_esn: 1, esn_name: 'Capgemini' });
  const xp2 = insertWorkExperience({ year: 2012, duration: 1, company_name: 'STM', is_esn: 1, esn_name: 'Randstad' });

  const sk1 = insertSkills({ name: 'Reactjs', duration: 7, level: 10 });
  const sk2 = insertSkills({ name: 'Nextjs', duration: 1, level: 5 });
  const sk3 = insertSkills({ name: 'Nodejs', duration: 4, level: 8 });

  console.log(cv, ed1, ed2, xp1, xp2, sk1, sk2, sk3);

  insertEducationIntoCV({ firstName: 'David', lastName: 'Averbouch', schoolName: 'UPMC' });
  insertEducationIntoCV({ firstName: 'David', lastName: 'Averbouch', schoolName: 'Polytech' });

  insertWorkExperienceIntoCV({ firstName: 'David', lastName: 'Averbouch', companyName: 'Capgemini' });
  insertWorkExperienceIntoCV({ firstName: 'David', lastName: 'Averbouch', companyName: 'STM' });

  insertSkillIntoCV({ firstName: 'David', lastName: 'Averbouch', skillName: 'Reactjs' });
  insertSkillIntoCV({ firstName: 'David', lastName: 'Averbouch', skillName: 'Nextjs' });
  insertSkillIntoCV({ firstName: 'David', lastName: 'Averbouch', skillName: 'Nodejs' });

  const userCV = getUserCV('David', 'Averbouch');
  console.log({ userCV });
};
