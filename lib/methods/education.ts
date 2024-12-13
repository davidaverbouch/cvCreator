import { CV, Education } from '../interfaces';
import { db, getEntityIdByName } from '../utils';
import { getCV } from './cv';

export const educationForCv = (cvRow: CV): Education[] => db.prepare(`SELECT e.year, e.duration, e.school, e.city FROM education e JOIN cv_education cs ON cs.education_id = e.id WHERE cs.cv_id = ?`).all(cvRow.id) as Education[];

// Ajouter une entrée d'éducation
export const insertEducation = ({ year, duration, school, city }: { year: number; duration: number; school: string; city: string }) => {
  return db.prepare(`INSERT INTO education (year, duration, school, city) VALUES (?, ?, ?, ?)`).run(year, duration, school, city).lastInsertRowid;
};

// Associer une éducation au cv
// ex: insertEducationIntoCV('David', 'Averbouch', 'UPMC)
export const insertEducationIntoCV = ({ firstName, lastName, schoolName }: { firstName: string; lastName: string; schoolName: string }) => {
  const cvRow = getCV(firstName, lastName);
  if (!cvRow) throw new Error('CV not found');

  const educationRow = getEntityIdByName('education', 'school', schoolName);
  if (!educationRow) throw new Error('Education not found');

  return db.prepare(`INSERT INTO cv_education (cv_id, education_id) VALUES (?, ?)`).run(cvRow.id, educationRow.id);
};
