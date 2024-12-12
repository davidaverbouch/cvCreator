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

// Ajouter une expérience professionnelle
export const insertSkills = ({ name, duration, level }: { name: string; duration: number; level: number }) => {
  return db.prepare(`INSERT INTO work_experience (name, duration, level) VALUES (?, ?, ?, ?, ?)`).run(name, duration, level).lastInsertRowid;
};

// Ajouter une personne en regroupant l'éducation et l'expérience professionnelle
export const insertCV = ({ educationId, workExperienceId, skillId }: { educationId: number; workExperienceId: number; skillId: number }) => {
  return db.prepare(` INSERT INTO cv (education_id, work_experience_id, skill_id) VALUES (?, ?, ?)`).run(educationId, workExperienceId, skillId);
};

// // Récupérer les compétences d'un CV spécifique
// const cvId = 1; // Remplacez par l'ID du CV que vous voulez consulter
// const skillsForCv = db.prepare(`
//   SELECT s.name, s.duration, s.level
//   FROM skills s
//   JOIN cv_skills cs ON cs.skill_id = s.id
//   WHERE cs.cv_id = ?
// `).all(cvId);

// -- Associer les expériences professionnelles au CV
// INSERT INTO cv_work_experience (cv_id, work_experience_id)
// VALUES
//   (SELECT id FROM cv WHERE education_id = (SELECT id FROM education WHERE school = 'UPMC' AND city = 'Paris')),
//   (SELECT id FROM work_experience WHERE company_name = 'Capgemini');

// INSERT INTO cv_work_experience (cv_id, work_experience_id)
// VALUES
//   (SELECT id FROM cv WHERE education_id = (SELECT id FROM education WHERE school = 'UPMC' AND city = 'Paris')),
//   (SELECT id FROM work_experience WHERE company_name = 'Randstad');

// -- Associer les compétences au CV
// INSERT INTO cv_skills (cv_id, skills_id)
// VALUES
//   (SELECT id FROM cv WHERE education_id = (SELECT id FROM education WHERE school = 'UPMC' AND city = 'Paris')),
//   (SELECT id FROM skills WHERE name = 'React');

// INSERT INTO cv_skills (cv_id, skills_id)
// VALUES
//   (SELECT id FROM cv WHERE education_id = (SELECT id FROM education WHERE school = 'UPMC' AND city = 'Paris')),
//   (SELECT id FROM skills WHERE name = 'Next.js');

// INSERT INTO cv_skills (cv_id, skills_id)
// VALUES
//   (SELECT id FROM cv WHERE education_id = (SELECT id FROM education WHERE school = 'UPMC' AND city = 'Paris')),
//   (SELECT id FROM skills WHERE name = 'Node.js');
