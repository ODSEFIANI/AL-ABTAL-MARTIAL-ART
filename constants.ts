import { Discipline, DisciplineInfo, Trainer } from "./types";

// Placeholder images - In a real deployment, replace these with the uploaded assets
export const LOGO_URL = "./test2.png"; // Replace with actual logo URL
export const HERO_VIDEO_URL = "./videoblack.mp4"; // Martial Arts placeholder
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
    id: "kids_full_fight",
    name: Discipline.KIDS_FULL_FIGHT,
    description:
      "Initiation aux arts martiaux et sports de combat adaptée aux enfants. Discipline, motricité et respect.",
    image:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop",
    schedules: [
      { day: "Lundi", hours: "18:00 - 19:00", group: "Enfants" },
      { day: "Mercredi", hours: "18:00 - 19:00", group: "Enfants" },
      { day: "Vendredi", hours: "18:00 - 19:00", group: "Enfants" },
    ],
  },
  {
    id: "full_kick_thai",
    name: Discipline.FULL_KICK_THAI,
    description:
      "Entraînement complet combinant Kick Boxing, Muay Thai et Full Contact. Intensité et technique pour tous niveaux.",
    image: "/full.jpeg",
    schedules: [
      { day: "Lundi", hours: "19:00 - 20:00", group: "Adultes" },
      { day: "Lundi", hours: "20:00 - 21:00", group: "Adultes" },
      { day: "Mercredi", hours: "19:00 - 20:00", group: "Adultes" },
      { day: "Mercredi", hours: "20:00 - 21:00", group: "Adultes" },
      { day: "Vendredi", hours: "19:00 - 20:00", group: "Adultes" },
      { day: "Vendredi", hours: "20:00 - 21:00", group: "Adultes" },
    ],
  },
  {
    id: "qwankido",
    name: Discipline.QWAN_KI_DO,
    description:
      "Art martial sino-vietnamien. Techniques de mains, pieds, sauts, ciseaux et armes traditionnelles.",
    image: "/muythai.jpeg",
    schedules: [
      { day: "Mardi", hours: "19:30 - 20:30", group: "Tous" },
      { day: "Jeudi", hours: "19:30 - 20:30", group: "Tous" },
      { day: "Samedi", hours: "19:30 - 20:30", group: "Tous" },
    ],
  },
  {
    id: "aerobic_dance",
    name: Discipline.AEROBIC_WOMEN,
    description:
      "Séances 100% femmes combinant fitness, aérobic et danse orientale pour la forme et le bien-être.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1996&auto=format&fit=crop",
    schedules: [
      { day: "Mardi", hours: "18:00 - 19:00", group: "Femmes" },
      { day: "Jeudi", hours: "18:00 - 19:00", group: "Femmes" },
      { day: "Samedi", hours: "18:00 - 19:00", group: "Femmes" },
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
