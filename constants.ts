import { Discipline, DisciplineInfo, Trainer } from './types';

// Placeholder images - In a real deployment, replace these with the uploaded assets
export const LOGO_URL = "https://i.imgur.com/exampleLogo.png"; // Replace with actual logo URL
export const HERO_VIDEO_URL = "https://player.vimeo.com/external/371842795.sd.mp4?s=40422c54c30c722187b557998b44687d85444b7d&profile_id=164&oauth2_token_id=57447761"; // Martial Arts placeholder
export const ABOUT_IMAGE_URL = "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop";

export const APP_NAME = "ASSOCIATION AL ABTAL";
export const FOUNDED_YEAR = 1981;
export const LOCATION = "Rabat, Maroc";

export const TRAINER_INFO: Trainer = {
  name: "Head Coach",
  role: "Entraîneur de l'équipe Nationale",
  experience: "Depuis 1981",
  image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=2000&auto=format&fit=crop" 
};

export const DISCIPLINES: DisciplineInfo[] = [
  {
    id: 'kickboxing',
    name: Discipline.KICK_BOXING,
    description: "Un sport de combat dynamique combinant les techniques de boxe anglaise et les coups de pied.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop",
    schedules: [
      { day: "Lundi", hours: "18:00 - 19:30", group: "Enfants" },
      { day: "Mercredi", hours: "18:00 - 19:30", group: "Enfants" },
      { day: "Vendredi", hours: "19:30 - 21:00", group: "Adultes" },
    ]
  },
  {
    id: 'muaythai',
    name: Discipline.MUAY_THAI,
    description: "L'art des huit membres. Utilisez les poings, les pieds, les coudes et les genoux.",
    image: "https://images.unsplash.com/photo-1596356453261-0d265ae2520a?q=80&w=2070&auto=format&fit=crop",
    schedules: [
      { day: "Mardi", hours: "19:00 - 20:30", group: "Tous" },
      { day: "Jeudi", hours: "19:00 - 20:30", group: "Tous" },
      { day: "Samedi", hours: "10:00 - 12:00", group: "Compétition" },
    ]
  },
  {
    id: 'fullcontact',
    name: Discipline.FULL_CONTACT,
    description: "Discipline, rapidité et technique. Idéal pour canaliser l'énergie des jeunes.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
    schedules: [
      { day: "Lundi", hours: "19:30 - 21:00", group: "Adultes" },
      { day: "Mercredi", hours: "19:30 - 21:00", group: "Adultes" },
      { day: "Samedi", hours: "14:00 - 16:00", group: "Enfants" },
    ]
  }
];

export const MISSIONS = [
  "Discipline",
  "Confiance",
  "Respect",
  "Excellence"
];

export const CONTACT_INFO = {
  address: "Association Al Abtal, Rabat, Maroc",
  phone: "+212 6 00 00 00 00",
  email: "contact@alabtal-rabat.com"
};

export const AI_SYSTEM_INSTRUCTION = `You are 'Coach Abtal', an expert martial arts AI assistant for Association Al Abtal in Rabat. 
The gym was founded in 1981 by a National Team Coach.
We teach Kick Boxing, Muay Thai, and Full Contact.
Our mission is to build confidence, discipline, and respect, especially in children.
Answer questions about our schedule, the benefits of martial arts for kids, and our history.
Be motivating, respectful, and brief. Use emojis occasionally. 
If asked about specific prices, say 'Please visit us at the gym in Rabat for subscription details.'
Always emphasize our values: Discipline, Confidence, Respect.`;
