import React from 'react';
import { HERO_VIDEO_URL } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
        <h2 className="text-accent font-bold text-lg md:text-2xl uppercase tracking-[0.3em] mb-4 animate-pulse">
            Rabat • Depuis 1981
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 text-glow leading-tight">
          L'ESPRIT DU<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">COMBATTANT</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto">
          École d’arts martiaux pour enfants et adultes. 
          Kick Boxing, Muay Thai, Full Contact. 
          <br/>
          <span className="font-medium text-white block mt-2">Discipline • Confiance • Respect</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#schedule" className="px-8 py-3 bg-accent text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-colors duration-300 rounded-sm">
                Voir les horaires
            </a>
            <a href="#about" className="px-8 py-3 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
                En savoir plus
            </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
