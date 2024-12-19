export interface CV {
  id: number;
  first_name: string;
  last_name: string;
  face: string;
  title: string;
  description: string;
  mindset: string;
}

export interface EntityId {
  id: number;
}

export interface Education {
  year: number;
  duration: number;
  school: string;
  city: string;
}

export interface WorkExperience {
  title: string;
  year: number;
  duration: number;
  company_name: string;
  is_esn: number;
  esn_name: string | null;
}

export interface Skill {
  category: string;
  name: string;
  duration: number;
  level: number;
  is_main: number;
}

export interface UserCV {
  id: number;
  first_name: string;
  last_name: string;
  face: string;
  title: string;
  description: string;
  mindset: string;
  educations: Education[];
  workExperiences: WorkExperience[];
  skills: Skill[];
}

export interface User {
  id: number;
  sex: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  phone: string;
  email: string;
  address: string;
  driveLicence: string;
}

export interface UserDTO {
  id: number;
  sex: string;
  first_name: string;
  last_name: string;
  birthday: number;
  phone: string;
  email: string;
  address: string;
  drive_licence: string;
}
