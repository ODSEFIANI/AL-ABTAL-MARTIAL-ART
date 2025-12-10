import { Discipline, DisciplineInfo, Trainer } from "./types";

// Placeholder images - In a real deployment, replace these with the uploaded assets
export const LOGO_URL = "./logo.gif"; // Replace with actual logo URL
export const HERO_VIDEO_URL = "./public/videoblack.mp4"; // Martial Arts placeholder
export const ABOUT_IMAGE_URL = "./trainer.jpg";

export const APP_NAME = "ASSOCIATION AL ABTAL";
export const FOUNDED_YEAR = 1981;
export const LOCATION = "Rabat, Maroc";

export const TRAINER_INFO: Trainer = {
  name: "Head Coach",
  role: "Entraîneur de l'équipe Nationale",
  experience: "Depuis 1981",
  image: "./trainer.jpg",
};

export const DISCIPLINES: DisciplineInfo[] = [
  {
    id: "kickboxing",
    name: Discipline.KICK_BOXING,
    description:
      "Un sport de combat dynamique combinant les techniques de boxe anglaise et les coups de pied.",
    image: "./assets/kickbox.avif",
    schedules: [
      { day: "Lundi", hours: "18:00 - 19:30", group: "Enfants" },
      { day: "Mercredi", hours: "18:00 - 19:30", group: "Enfants" },
      { day: "Vendredi", hours: "19:30 - 21:00", group: "Adultes" },
    ],
  },
  {
    id: "muaythai",
    name: Discipline.MUAY_THAI,
    description:
      "L'art des huit membres. Utilisez les poings, les pieds, les coudes et les genoux.",
    image: "/assets/muythai.jpeg",
    schedules: [
      { day: "Mardi", hours: "19:00 - 20:30", group: "Tous" },
      { day: "Jeudi", hours: "19:00 - 20:30", group: "Tous" },
      { day: "Samedi", hours: "10:00 - 12:00", group: "Compétition" },
    ],
  },
  {
    id: "fullcontact",
    name: Discipline.FULL_CONTACT,
    description:
      "Discipline, rapidité et technique. Idéal pour canaliser l'énergie des jeunes.",
    image: "/assets/full.jpeg",
    schedules: [
      { day: "Lundi", hours: "19:30 - 21:00", group: "Adultes" },
      { day: "Mercredi", hours: "19:30 - 21:00", group: "Adultes" },
      { day: "Samedi", hours: "14:00 - 16:00", group: "Enfants" },
    ],
  },
];

export const MISSIONS = ["Discipline", "Confiance", "Respect", "Excellence"];

export const CONTACT_INFO = {
  address: "Association Al Abtal, Rabat, Maroc",
  phone: "+212 6 00 00 00 00",
  email: "contact@alabtal-rabat.com",
};

export const AI_SYSTEM_INSTRUCTION = `You are 'Coach Abtal', an expert martial arts AI assistant for Association Al Abtal in Rabat. 
The gym was founded in 1981 by a National Team Coach.
We teach Kick Boxing, Muay Thai, and Full Contact.
Our mission is to build confidence, discipline, and respect, especially in children.
Answer questions about our schedule, the benefits of martial arts for kids, and our history.
Be motivating, respectful, and brief. Use emojis occasionally. 
If asked about specific prices, say 'Please visit us at the gym in Rabat for subscription details.'
Always emphasize our values: Discipline, Confidence, Respect.`;
