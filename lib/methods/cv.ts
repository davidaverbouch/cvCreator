import { CV, UserCV } from '../interfaces';
import { db } from '../utils';
import { educationForCv } from './education';
import { skillsForCv } from './skills';
import { workExperienceForCv } from './workExperience';

export const getCV = (firstName: string, lastName: string): CV => {
  return db.prepare(`SELECT * FROM cv WHERE first_name = ? AND last_name = ?`).get(firstName, lastName) as CV;
};

export const getUserCV = (firstName: string, lastName: string): UserCV => {
  const cvRow = db.prepare(`SELECT * FROM cv WHERE first_name = ? AND last_name = ?`).get(firstName, lastName) as CV;
  if (!cvRow) throw new Error(`CV not found for ${firstName} ${lastName}`);

  const educations = educationForCv(cvRow);
  const workExperiences = workExperienceForCv(cvRow);
  const skills = skillsForCv(cvRow);
  console.log({ educations, workExperiences, skills });

  return {
    ...cvRow,
    education: educations,
    workExperiences: workExperiences,
    skills: skills,
  };
};

// Ajouter une personne en regroupant l'éducation et l'expérience professionnelle
export const insertCV = ({ firstName, lastName }: { firstName: string; lastName: string }) => {
  const existingCV = getCV(firstName, lastName);
  if (existingCV) throw new Error(`CV for ${firstName} ${lastName} already exists.`);

  return db.prepare(`INSERT INTO cv (first_name, last_name) VALUES (?, ?)`).run(firstName, lastName);
};
