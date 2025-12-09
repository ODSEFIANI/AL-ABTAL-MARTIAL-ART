import React from 'react';
import { TRAINER_INFO, MISSIONS, ABOUT_IMAGE_URL } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>
            <div className="relative h-[500px] w-full overflow-hidden rounded-sm shadow-2xl">
                <img 
                    src={ABOUT_IMAGE_URL} 
                    alt="Training Session" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                />
                {/* Badge */}
                <div className="absolute bottom-0 left-0 bg-accent text-white p-6">
                    <p className="text-3xl font-heading font-bold">{new Date().getFullYear() - 1981}+</p>
                    <p className="text-sm uppercase tracking-wider">Années d'expérience</p>
                </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-accent font-bold uppercase tracking-widest mb-2">À Propos</h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              FORGER LE CARACTÈRE PAR <span className="text-accent">LE COMBAT</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              Depuis 1981, l'Association Al Abtal est un pilier des arts martiaux à Rabat. 
              Sous la direction de notre entraîneur principal, ancien sélectionneur de l'équipe nationale, 
              nous nous engageons à former non seulement des athlètes, mais des individus forts.
            </p>
            
            <div className="p-6 bg-gray-custom border-l-4 border-accent mb-8">
                <p className="text-xl text-white font-medium italic">
                    "{TRAINER_INFO.role} - {TRAINER_INFO.experience}"
                </p>
                <p className="text-gray-500 mt-2">— {TRAINER_INFO.name}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {MISSIONS.map((mission, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-white font-heading text-lg tracking-wide uppercase">{mission}</span>
                    </div>
                ))}
            </div>
            
            <div className="mt-10">
                <h4 className="text-white font-bold mb-4">Parfait pour les enfants</h4>
                <p className="text-gray-400 text-sm">
                    Notre programme pour enfants ("École d'arts martiaux") est spécialement conçu pour inculquer 
                    la discipline et la confiance en soi dans un environnement sécurisé et encadré.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
