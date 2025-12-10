export enum Discipline {
  KIDS_FULL_FIGHT = "Enfants – Full Fight",
  FULL_KICK_THAI = "Full – Kick – Thai",
  QWAN_KI_DO = "Qwan Ki Do / Kung Fu Vietnamien",
  AEROBIC_WOMEN = "Femmes – Aérobic / Danse orientale",
}

export interface ClassSchedule {
  day: string;
  hours: string;
  group: "Enfants" | "Adultes" | "Tous" | "Compétition" | "Femmes";
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
  role: "user" | "model";
  text: string;
  timestamp: number;
}
