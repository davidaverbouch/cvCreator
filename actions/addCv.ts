'use server';

import { insertEducation, insertSkills, insertWorkExperience } from '@/lib/dbFunction';

export const CreateCV = async () => {
  const ed1 = insertEducation({ year: 2008, duration: 2, school: 'UPMC', city: 'Paris' });
  const ed2 = insertEducation({ year: 2010, duration: 1, school: 'Polytech', city: 'Nice' });

  const xp1 = insertWorkExperience({ year: 2011, duration: 1, company_name: 'Capgemini', is_esn: true, esn_name: 'Capgemini' });
  const xp2 = insertWorkExperience({ year: 2012, duration: 1, company_name: 'STM', is_esn: true, esn_name: 'Randstad' });

  const sk1 = insertSkills({ name: 'Reactjs', duration: 7, level: 10 });
  const sk2 = insertSkills({ name: 'Nextjs', duration: 1, level: 5 });
  const sk3 = insertSkills({ name: 'Nodejs', duration: 4, level: 8 });

  console.log(ed1, ed2, xp1, xp2, sk1, sk2, sk3);
};
