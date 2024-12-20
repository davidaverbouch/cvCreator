import sql from 'better-sqlite3';

const db = sql('data.db');

const initDB = () => {
  // Créer la table "education"
  db.exec(`
    CREATE TABLE IF NOT EXISTS education (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        year INTEGER NOT NULL,
        duration INTEGER NOT NULL,
        school TEXT NOT NULL,
        city TEXT NOT NULL
    );
  `);

  // table de liaison education et cv
  db.exec(`
    CREATE TABLE IF NOT EXISTS cv_education (
      cv_id INTEGER NOT NULL,
      education_id INTEGER NOT NULL,
      FOREIGN KEY (cv_id) REFERENCES cv(id),
      FOREIGN KEY (education_id) REFERENCES education(id),
      PRIMARY KEY (cv_id, education_id)
    );
  `);

  // Créer la table "work_experience"
  db.exec(`
    CREATE TABLE IF NOT EXISTS work_experience (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        year INTEGER NOT NULL,
        duration INTEGER NOT NULL,
        company_name TEXT NOT NULL,
        is_esn BOOLEAN NOT NULL,
        esn_name TEXT
    );
  `);

  // table de liaison work_experience et cv
  db.exec(`
    CREATE TABLE IF NOT EXISTS cv_work_experience (
      cv_id INTEGER NOT NULL,
      work_experience_id INTEGER NOT NULL,
      FOREIGN KEY (cv_id) REFERENCES cv(id),
      FOREIGN KEY (work_experience_id) REFERENCES work_experience(id),
      PRIMARY KEY (cv_id, work_experience_id)
    );
  `);

  // Créer la table "skills"
  db.exec(`
    CREATE TABLE IF NOT EXISTS skills (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        duration INTEGER NOT NULL,
        level INTEGER NOT NULL,
        is_main BOOLEAN NOT NULL,
        category TEXT NOT NULL
    );
  `);

  // table de liaison cv et skills
  db.exec(`
    CREATE TABLE IF NOT EXISTS cv_skills (
      cv_id INTEGER NOT NULL,
      skill_id INTEGER NOT NULL,
      FOREIGN KEY (cv_id) REFERENCES cv(id),
      FOREIGN KEY (skill_id) REFERENCES skills(id),
      PRIMARY KEY (cv_id, skill_id)
    );
  `);

  // Créer la table "cv" qui regroupe les autres
  db.exec(`
    CREATE TABLE IF NOT EXISTS cv (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        face TEXT NOT NULL,
        title Text NOT NULL,
        description TEXT NOT NULL,
        mindset TEXT NOT NULL
    );
  `);

  // Creer la table user
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sex TEXT NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        birthday INTEGER NOT NULL,
        phone TEXT NOT NULL,
        email TEXT NOT NULL,
        address TEXT NOT NULL,
        drive_licence TEXT NOT NULL,
        cv_id INTEGER,
        FOREIGN KEY (cv_id) REFERENCES cv(id) ON DELETE SET NULL
    );
  `);
};

initDB();
