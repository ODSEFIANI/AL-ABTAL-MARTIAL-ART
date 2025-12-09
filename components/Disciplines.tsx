import React from 'react';
import { DISCIPLINES } from '../constants';

export const Disciplines: React.FC = () => {
  return (
    <section id="disciplines" className="py-20 bg-gray-custom">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h3 className="text-accent font-bold uppercase tracking-widest mb-2">Nos Programmes</h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              CHOISISSEZ VOTRE <span className="text-outline-white">VOIE</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DISCIPLINES.map((discipline) => (
                <div key={discipline.id} className="group relative bg-primary overflow-hidden rounded-sm hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                    <div className="h-64 overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                        <img 
                            src={discipline.image} 
                            alt={discipline.name} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                        />
                        <div className="absolute bottom-4 left-4 z-20">
                            <h3 className="text-2xl font-heading font-bold text-white italic group-hover:text-accent transition-colors">
                                {discipline.name.toUpperCase()}
                            </h3>
                        </div>
                    </div>
                    <div className="p-8">
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            {discipline.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                            {discipline.schedules.slice(0, 2).map((sched, idx) => (
                                <li key={idx} className="flex justify-between text-sm text-gray-300 border-b border-gray-800 pb-2">
                                    <span>{sched.day}</span>
                                    <span className="text-accent">{sched.hours}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#schedule" className="inline-block text-white text-sm font-bold uppercase tracking-widest border-b-2 border-accent pb-1 hover:text-accent transition-colors">
                            Voir détails
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
