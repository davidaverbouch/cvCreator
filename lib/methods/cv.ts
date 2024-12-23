import { CV, UserCV } from '../interfaces';
import { db } from '../utils';
import { educationForCv } from './education';
import { skillsForCv } from './skills';
import { getUser } from './user';
import { workExperienceForCv } from './workExperience';

export const getCV = (firstName: string, lastName: string): CV => {
  return db.prepare(`SELECT * FROM cv WHERE first_name = ? AND last_name = ?`).get(firstName, lastName) as CV;
};

export const getUserCV = (firstName: string, lastName: string): UserCV | undefined => {
  const cvRow = db.prepare(`SELECT * FROM cv WHERE first_name = ? AND last_name = ?`).get(firstName, lastName) as CV;
  if (!cvRow) return undefined;

  const educations = educationForCv(cvRow);
  const workExperiences = workExperienceForCv(cvRow);
  const skills = skillsForCv(cvRow);

  return {
    ...cvRow,
    educations: educations,
    workExperiences: workExperiences,
    skills: skills,
  };
};

// Ajouter une personne en regroupant l'éducation et l'expérience professionnelle
export const insertCV = ({
  firstName,
  lastName,
  face,
  title,
  description,
  mindset,
}: {
  firstName: string;
  lastName: string;
  face: string;
  title: string;
  description: string;
  mindset: string;
}) => {
  const user = getUser({ firstName, lastName });
  if (!user) throw new Error(`no user for ${firstName} ${lastName}`);

  const existingCV = getCV(firstName, lastName);
  if (existingCV) throw new Error(`CV for ${firstName} ${lastName} already exists.`);

  // insert into cv
  const cv = db
    .prepare(`INSERT INTO cv (first_name, last_name, face, title, description, mindset) VALUES (?, ?, ?, ?, ?, ?)`)
    .run(firstName, lastName, face, title, description, mindset);
  const cvId = cv.lastInsertRowid;

  // insert into user
  db.prepare(`UPDATE users SET cv_id = ? WHERE first_name = ? AND last_name = ?`).run(cvId, firstName, lastName);
  return cvId;
};
