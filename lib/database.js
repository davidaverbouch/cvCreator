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

  // Créer la table "work_experience"
  db.exec(`
    CREATE TABLE IF NOT EXISTS work_experience (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        year INTEGER NOT NULL,
        duration INTEGER NOT NULL,
        company_name TEXT NOT NULL,
        is_esn BOOLEAN NOT NULL,
        esn_name TEXT
    );
  `);

  // Créer la table "skills"
  db.exec(`
    CREATE TABLE IF NOT EXISTS skills (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        duration INTEGER NOT NULL,
        level INTEGER NOT NULL
    );
  `);

  // Créer la table "cv" qui regroupe les autres
  db.exec(`
    CREATE TABLE IF NOT EXISTS cv (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        education_id INTEGER NOT NULL,
        work_experience_id INTEGER NOT NULL,
        skills_id INTEGER NOT NULL,
        FOREIGN KEY (education_id) REFERENCES education(id),
        FOREIGN KEY (work_experience_id) REFERENCES work_experience(id),
        FOREIGN KEY (skills_id) REFERENCES skills(id)
    );
  `);

  // Creer la table user
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        cv_id INTEGER NOT NULL,
        FOREIGN KEY (cv_id) REFERENCES cv(id)
    );
  `);
};

initDB();
