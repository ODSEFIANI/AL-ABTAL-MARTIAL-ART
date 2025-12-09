export enum Discipline {
  KICK_BOXING = 'Kick Boxing',
  MUAY_THAI = 'Muay Thai',
  FULL_CONTACT = 'Full Contact'
}

export interface ClassSchedule {
  day: string;
  hours: string;
  group: 'Enfants' | 'Adultes' | 'Tous' | 'Compétition';
}

export interface DisciplineInfo {
  id: string;
  name: Discipline;
  description: string;
  image: string;
  schedules: ClassSchedule[];
}

export interface Trainer {
  name: string;
  role: string;
  experience: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}