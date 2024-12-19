import { User, UserDTO } from '../interfaces';
import { db } from '../utils';

export const getUser = ({ firstName, lastName }: { firstName: string; lastName: string }): User | undefined => {
  const user = db.prepare(`SELECT * FROM users WHERE first_name = ? AND last_name = ?`).get(firstName, lastName) as UserDTO;
  if (!user) return undefined;

  return {
    id: user.id,
    sex: user.sex,
    firstName: user.first_name,
    lastName: user.last_name,
    birthday: new Date(user.birthday),
    phone: user.phone,
    email: user.email,
    address: user.address,
    driveLicence: user.drive_licence,
  };
};

// Ajouter une personne en regroupant l'éducation et l'expérience professionnelle
export const insertUser = ({ sex, firstName, lastName, birthday, phone, email, address, driveLicence }: Omit<User, 'id'>) => {
  const existingCV = getUser({ firstName, lastName });
  if (existingCV) throw new Error(`user for ${firstName} ${lastName} already exists.`);

  return db.prepare(`INSERT INTO users (sex, first_name, last_name, birthday, phone, email, address, drive_licence) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(sex, firstName, lastName, birthday.getTime(), phone, email, address, driveLicence);
};
