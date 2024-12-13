export interface CV {
  id: number;
  first_name: string;
  last_name: string;
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
  year: number;
  duration: number;
  company_name: string;
  is_esn: boolean;
  esn_name: string | null;
}

export interface Skill {
  name: string;
  duration: number;
  level: number;
}

export interface UserCV {
  id: number;
  first_name: string;
  last_name: string;
  education: Education[];
  workExperiences: WorkExperience[];
  skills: Skill[];
}
