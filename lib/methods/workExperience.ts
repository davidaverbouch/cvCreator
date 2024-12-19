import { CV, WorkExperience } from '../interfaces';
import { db, getEntityIdByName } from '../utils';
import { getCV } from './cv';

export const workExperienceForCv = (cvRow: CV): WorkExperience[] => db.prepare(`SELECT * FROM work_experience xp JOIN cv_work_experience cs ON cs.work_experience_id = xp.id WHERE cs.cv_id = ?`).all(cvRow.id) as WorkExperience[];

// Ajouter une expérience professionnelle
export const insertWorkExperience = ({ title, year, duration, company_name, is_esn, esn_name }: { title: string; year: number; duration: number; company_name: string; is_esn: number; esn_name: string }) => {
  return db.prepare(`INSERT INTO work_experience (title, year, duration, company_name, is_esn, esn_name) VALUES (?, ?, ?, ?, ?, ?)`).run(title, year, duration, company_name, is_esn, esn_name).lastInsertRowid;
};

// Associer une expérience professionnelle au cv
// ex: insertWorkExperienceIntoCV('David', 'Averbouch', 'Capgemini)
export const insertWorkExperienceIntoCV = ({ firstName, lastName, companyName }: { firstName: string; lastName: string; companyName: string }) => {
  const cvRow = getCV(firstName, lastName);
  if (!cvRow) throw new Error('CV not found');

  const xpRow = getEntityIdByName('work_experience', 'company_name', companyName);
  if (!xpRow) throw new Error('Education not found');

  return db.prepare(`INSERT INTO cv_work_experience (cv_id, work_experience_id) VALUES (?, ?)`).run(cvRow.id, xpRow.id);
};

export const addWorkExperience = ({ firstName, lastName, title, year, duration, company_name, is_esn, esn_name }: { firstName: string; lastName: string; title: string; year: number; duration: number; company_name: string; is_esn: number; esn_name: string }) => {
  const xp = insertWorkExperience({ title, year, duration, company_name, is_esn, esn_name });
  insertWorkExperienceIntoCV({ firstName, lastName, companyName: company_name });
  return xp;
};
