import sql from 'better-sqlite3';

const db = sql('data.db');

export const getCV = async () => {
  return db.prepare('SELECT * from cv').all();
};

// Ajouter une entrée d'éducation
export const insertEducation = ({ year, duration, school, city }: { year: number; duration: number; school: string; city: string }) => {
  return db.prepare(`INSERT INTO education (year, duration, school, city) VALUES (?, ?, ?, ?)`).run(year, duration, school, city).lastInsertRowid;
};

// Ajouter une expérience professionnelle
export const insertWorkExperience = ({ year, duration, company_name, is_esn, esn_name }: { year: number; duration: number; company_name: string; is_esn: boolean; esn_name: string }) => {
  return db.prepare(`INSERT INTO work_experience (year, duration, company_name, is_esn, esn_name) VALUES (?, ?, ?, ?, ?)`).run(year, duration, company_name, is_esn, esn_name).lastInsertRowid;
};

// Ajouter une personne en regroupant l'éducation et l'expérience professionnelle
export const insertCV = ({ educationId, workExperienceId }: { educationId: number; workExperienceId: number }) => {
  return db.prepare(` INSERT INTO cv (education_id, work_experience_id) VALUES (?, ?)`).run(educationId, workExperienceId);
};
