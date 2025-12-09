import React from 'react';
import { CONTACT_INFO, APP_NAME } from '../constants';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-20 pb-10 border-t-4 border-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-6 uppercase tracking-wider">{APP_NAME}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Former les champions de demain à Rabat depuis 1981. Rejoignez la famille Al Abtal et découvrez votre potentiel.
                </p>
                <div className="flex space-x-4">
                    {/* Social Placeholders */}
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692 1.226 0 1.77.057 1.77.057v1.943z"/></svg>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="text-lg font-bold mb-6 text-accent">Navigation</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-white transition">Accueil</a></li>
                    <li><a href="#about" className="hover:text-white transition">À Propos</a></li>
                    <li><a href="#disciplines" className="hover:text-white transition">Disciplines</a></li>
                    <li><a href="#schedule" className="hover:text-white transition">Horaires</a></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h4 className="text-lg font-bold mb-6 text-accent">Contact</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-accent mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        <span>{CONTACT_INFO.address}</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                        <span>{CONTACT_INFO.phone}</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        <span>{CONTACT_INFO.email}</span>
                    </li>
                </ul>
            </div>

            {/* Map Placeholder */}
            <div className="h-48 bg-gray-800 rounded-sm relative overflow-hidden group">
                 {/* This would be an iframe google map in production */}
                 <div className="absolute inset-0 bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition">
                     <span className="text-gray-400 font-bold tracking-widest uppercase">Carte Google Maps</span>
                 </div>
            </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} {APP_NAME}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
