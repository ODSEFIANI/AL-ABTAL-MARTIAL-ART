import React from 'react';
import { DISCIPLINES } from '../constants';

export const Schedule: React.FC = () => {
  // Flat list for schedule logic could be optimized, but for this size, simple mapping is fine
  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

  return (
    <section id="schedule" className="py-20 bg-primary border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h3 className="text-accent font-bold uppercase tracking-widest mb-2">Planning</h3>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                  HORAIRES D'ENTRAÎNEMENT
                </h2>
            </div>
            <div className="mt-4 md:mt-0 flex gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-400 text-sm">Enfants</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-gray-400 text-sm">Adultes/Tous</span>
                </div>
            </div>
        </div>

        <div className="overflow-x-auto">
            <div className="min-w-[800px] grid grid-cols-7 gap-1">
                {/* Header */}
                {days.map(day => (
                    <div key={day} className="bg-gray-custom p-4 text-center font-heading font-bold text-gray-300 uppercase tracking-wider">
                        {day}
                    </div>
                ))}

                {/* Grid Content - Simplified logic to show availability */}
                {days.map((day) => (
                    <div key={`col-${day}`} className="space-y-2 bg-gray-900/50 min-h-[200px] p-2 border border-gray-800">
                        {DISCIPLINES.map(disc => {
                            const todaySchedule = disc.schedules.filter(s => s.day === day);
                            return todaySchedule.map((sched, idx) => (
                                <div 
                                    key={`${disc.id}-${idx}`} 
                                    className={`p-3 rounded-sm text-xs border-l-4 shadow-sm transition-transform hover:scale-105 cursor-default ${
                                        sched.group === 'Enfants' ? 'bg-white text-black border-gray-400' : 'bg-accent/10 text-gray-200 border-accent'
                                    }`}
                                >
                                    <div className="font-bold mb-1">{disc.name}</div>
                                    <div className="mb-1">{sched.hours}</div>
                                    <div className="uppercase tracking-wide text-[10px] opacity-75">{sched.group}</div>
                                </div>
                            ));
                        })}
                    </div>
                ))}
            </div>
        </div>
        
        <p className="text-center text-gray-500 mt-8 italic">
            * Les horaires sont susceptibles de changer. Contactez-nous pour confirmer votre première séance.
        </p>
      </div>
    </section>
  );
};
