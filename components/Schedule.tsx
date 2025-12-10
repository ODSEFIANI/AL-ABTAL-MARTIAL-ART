import React from "react";
import { DISCIPLINES } from "../constants";

export const Schedule: React.FC = () => {
  const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  const getScheduleStyle = (group: string) => {
    switch (group) {
      case "Enfants":
        return "bg-white text-black border-gray-400";
      case "Femmes":
        return "bg-pink-600/30 text-pink-100 border-pink-500";
      case "Tous":
        return "bg-secondary/20 text-yellow-100 border-secondary"; // Gold for Qwan Ki Do
      default:
        return "bg-accent/20 text-red-100 border-accent"; // Adultes/Combat
    }
  };

  return (
    <section
      id="schedule"
      className="py-20 bg-primary border-t border-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h3 className="text-accent font-bold uppercase tracking-widest mb-2">
              Planning
            </h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              HORAIRES D'ENTRAÎNEMENT
            </h2>
          </div>

          {/* Legend */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-gray-400 text-sm">Enfants</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-gray-400 text-sm">Kick/Thai/Full</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-gray-400 text-sm">Qwan Ki Do</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <span className="text-gray-400 text-sm">Femmes</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[800px] grid grid-cols-7 gap-1">
            {/* Header */}
            {days.map((day) => (
              <div
                key={day}
                className="bg-gray-custom p-4 text-center font-heading font-bold text-gray-300 uppercase tracking-wider"
              >
                {day}
              </div>
            ))}

            {/* Grid Content */}
            {days.map((day) => (
              <div
                key={`col-${day}`}
                className="space-y-2 bg-gray-900/50 min-h-[200px] p-2 border border-gray-800"
              >
                {DISCIPLINES.map((disc) => {
                  const todaySchedule = disc.schedules.filter(
                    (s) => s.day === day
                  );
                  return todaySchedule.map((sched, idx) => (
                    <div
                      key={`${disc.id}-${idx}`}
                      className={`p-2 rounded-sm text-xs border-l-4 shadow-sm transition-transform hover:scale-105 cursor-default ${getScheduleStyle(
                        sched.group
                      )}`}
                    >
                      <div className="font-bold mb-1 line-clamp-2">
                        {disc.name}
                      </div>
                      <div className="mb-1 font-mono text-[11px]">
                        {sched.hours}
                      </div>
                      <div className="uppercase tracking-wide text-[10px] opacity-75">
                        {sched.group}
                      </div>
                    </div>
                  ));
                })}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-500 mt-8 italic">
          * Les horaires sont susceptibles de changer. Contactez-nous pour
          confirmer votre première séance.
        </p>
      </div>
    </section>
  );
};
