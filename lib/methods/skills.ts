import { CV, Skill } from '../interfaces';
import { db, getEntityIdByName } from '../utils';
import { getCV } from './cv';

export const skillsForCv = (cvRow: CV): Skill[] => db.prepare(`SELECT * FROM skills s JOIN cv_skills cs ON cs.skill_id = s.id WHERE cs.cv_id = ?`).all(cvRow.id) as Skill[];

// Ajouter un skill
export const insertSkills = ({ name, duration, level, isMain, category }: { name: string; duration: number; level: number; isMain: number; category: string }) => {
  return db.prepare(`INSERT INTO skills (name, duration, level, is_main, category) VALUES (?, ?, ?, ?, ?)`).run(name, duration, level, isMain, category).lastInsertRowid;
};

// Associer un skill au cv
// ex: insertSkillIntoCV('David', 'Averbouch', 'Reactjs)
export const insertSkillIntoCV = ({ firstName, lastName, skillName }: { firstName: string; lastName: string; skillName: string }) => {
  const cvRow = getCV(firstName, lastName);
  if (!cvRow) throw new Error('CV not found');

  const skillRow = getEntityIdByName('skills', 'name', skillName);
  if (!skillRow) throw new Error('Education not found');

  return db.prepare(`INSERT INTO cv_skills (cv_id, skill_id) VALUES (?, ?)`).run(cvRow.id, skillRow.id);
};

export const addSkill = ({ firstName, lastName, name, duration, level, isMain, category }: { firstName: string; lastName: string; name: string; duration: number; level: number; isMain: number; category: string }) => {
  const skill = insertSkills({ name, duration, level, isMain, category });
  insertSkillIntoCV({ firstName, lastName, skillName: name });
  return skill;
};
