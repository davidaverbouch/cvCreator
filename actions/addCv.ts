'use server';

import { insertCV } from '@/lib/methods/cv';
import { addEducation } from '@/lib/methods/education';
import { addSkill } from '@/lib/methods/skills';
import { insertUser } from '@/lib/methods/user';
import { addWorkExperience } from '@/lib/methods/workExperience';
import { revalidatePath } from 'next/cache';

export const CreateCV = async () => {
  insertUser({
    sex: 'Mr',
    firstName: 'David',
    lastName: 'Averbouch',
    birthday: new Date('1986-05-05'),
    phone: '0622027591',
    email: 'david.averbouch@me.com',
    address: '38 rue Borniol, 06400 Cannes, france',
    driveLicence: 'B',
  });

  insertCV({
    firstName: 'David',
    lastName: 'Averbouch',
    face: '/asserts/pictures/face.png',
    title: 'Développeur senior Javascript / Typescript',
    description:
      'Expert Front-end avec 14 années d’expériences, spécialisé en React et vanillaJS. Forte appétence à l’UX/UI, je développe aussi du back NodeJS avec Express ou avec Firebase.',
    mindset: 'Curieux, motivé, problems solver, méticuleux, rigoureux, brillant',
  });

  addEducation({ firstName: 'David', lastName: 'Averbouch', year: 2008, duration: 2, school: 'UPMC', city: 'Paris' });
  addEducation({
    firstName: 'David',
    lastName: 'Averbouch',
    year: 2010,
    duration: 1,
    school: 'Polytech',
    city: 'Nice',
  });

  addWorkExperience({
    firstName: 'David',
    lastName: 'Averbouch',
    title: 'TechLead front-end React',
    year: 2024,
    duration: 1,
    company_name: 'STMicroelectronics',
    is_esn: 1,
    esn_name: 'Randstad',
  });
  addWorkExperience({
    firstName: 'David',
    lastName: 'Averbouch',
    title: 'Expert front-end React',
    year: 2022,
    duration: 2,
    company_name: 'Revers.io',
    is_esn: 0,
    esn_name: '',
  });
  addWorkExperience({
    firstName: 'David',
    lastName: 'Averbouch',
    title: 'TechLead front-end React',
    year: 2018,
    duration: 4,
    company_name: 'ProBTP',
    is_esn: 1,
    esn_name: 'Proelan',
  });
  addWorkExperience({
    firstName: 'David',
    lastName: 'Averbouch',
    title: 'TechLead fullstack React / Firebase',
    year: 2016,
    duration: 2,
    company_name: 'Planning Manager Software',
    is_esn: 0,
    esn_name: '',
  });
  addWorkExperience({
    firstName: 'David',
    lastName: 'Averbouch',
    title: 'TechLead front-end KnockoutJS',
    year: 2016,
    duration: 0,
    company_name: 'Inventy',
    is_esn: 0,
    esn_name: '',
  });
  addWorkExperience({
    firstName: 'David',
    lastName: 'Averbouch',
    title: 'TechLead front-end VanillaJS',
    year: 2015,
    duration: 1,
    company_name: 'Visteon',
    is_esn: 1,
    esn_name: 'Avisto',
  });
  addWorkExperience({
    firstName: 'David',
    lastName: 'Averbouch',
    title: 'TechLead front-end KnockoutJS',
    year: 2015,
    duration: 0,
    company_name: 'Docapost',
    is_esn: 1,
    esn_name: 'Avisto',
  });
  addWorkExperience({
    firstName: 'David',
    lastName: 'Averbouch',
    title: 'Référent front-end KnockoutJS',
    year: 2014,
    duration: 1,
    company_name: 'Syselio',
    is_esn: 0,
    esn_name: '',
  });
  addWorkExperience({
    firstName: 'David',
    lastName: 'Averbouch',
    title: 'Dev front-end KnockoutJS',
    year: 2013,
    duration: 1,
    company_name: 'Crossknowledge',
    is_esn: 1,
    esn_name: 'Abylsen',
  });
  addWorkExperience({
    firstName: 'David',
    lastName: 'Averbouch',
    title: 'Fullstack PHP / VanillaJS',
    year: 2011,
    duration: 2,
    company_name: 'BI Square software',
    is_esn: 0,
    esn_name: '',
  });

  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Reactjs',
    duration: 7,
    level: 10,
    isMain: 1,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Nextjs',
    duration: 1,
    level: 9,
    isMain: 1,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'VanillaJS',
    duration: 7,
    level: 10,
    isMain: 1,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'KnockoutJS',
    duration: 7,
    level: 10,
    isMain: 1,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Nodejs',
    duration: 4,
    level: 8,
    isMain: 1,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Javascript',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Typescript',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Redux',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Hooks',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Context API',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'React hook form',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'ReactQuery',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Styled-components',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'MUI',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'VueJS',
    duration: 4,
    level: 7,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Highchart',
    duration: 4,
    level: 9,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'amCharts',
    duration: 4,
    level: 9,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'chartjs',
    duration: 4,
    level: 9,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Express',
    duration: 4,
    level: 9,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'GCP',
    duration: 4,
    level: 7,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Firebase',
    duration: 4,
    level: 7,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'MySQL',
    duration: 4,
    level: 8,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'sqlite',
    duration: 4,
    level: 8,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Jest',
    duration: 4,
    level: 8,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Chai',
    duration: 4,
    level: 8,
    isMain: 0,
    category: 'Technologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Agile',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Methodologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Safe',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Methodologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'TDD',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Methodologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'cycle en V',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Methodologies',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'vscode',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Outils',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Git',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Outils',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Bitbucket',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Outils',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Azure devOps',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Outils',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Jira',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Outils',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Figma',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Outils',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Francais',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Langues',
  });
  addSkill({
    firstName: 'David',
    lastName: 'Averbouch',
    name: 'Anglais',
    duration: 4,
    level: 10,
    isMain: 0,
    category: 'Langues',
  });

  revalidatePath('makeIt');
};
