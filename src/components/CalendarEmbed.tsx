'use client';

import { useEffect, useRef } from 'react';
import { Calendar, Crown } from 'lucide-react';

export default function CalendarEmbed() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="calendar"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Calendario Nacional de Apicultura
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Mantente al día con los eventos apícolas más importantes de Argentina. 
            Los miembros premium reciben alertas filtradas por provincia.
          </p>
          
          {/* Premium notice */}
          <div className="bg-honey-50 border border-honey-200 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Crown className="h-4 w-4 text-honey-600" />
              <span className="text-honey-600 text-sm font-medium">
                Los suscriptores premium reciben alertas personalizadas por provincia
              </span>
            </div>
          </div>
        </div>

        {/* Calendar container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Calendar header with controls */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Eventos y Recordatorios
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-3 h-3 bg-honey-400 rounded-full"></span>
                <span>Eventos Nacionales</span>
                <span className="w-3 h-3 bg-field-400 rounded-full ml-4"></span>
                <span>Alertas Climáticas</span>
              </div>
            </div>
          </div>

          {/* Google Calendar Embed */}
          <div className="relative">
            {/* Placeholder for Google Calendar - replace with actual embed */}
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-honey-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-honey-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Calendario de Google
                </h4>
                <p className="text-gray-600 mb-4">
                  Aquí se mostrará el calendario con eventos apícolas
                </p>
                <div className="bg-honey-100 text-honey-700 px-4 py-2 rounded-lg text-sm font-medium inline-block">
                  Próximamente: Integración con Google Calendar
                </div>
              </div>
            </div>

            {/* 
              TODO: Replace the placeholder above with actual Google Calendar embed
              Example embed code:
              <iframe
                src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America/Argentina/Buenos_Aires"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="Calendario de Apicultura Argentina"
              ></iframe>
            */}
          </div>

          {/* Calendar info */}
          <div className="bg-gray-50 px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Eventos Incluidos:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ferias y exposiciones apícolas</li>
                  <li>• Cursos y capacitaciones</li>
                  <li>• Temporadas de floración</li>
                  <li>• Fechas de tratamientos preventivos</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Alertas Climáticas:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pronósticos de lluvia</li>
                  <li>• Alertas de viento fuerte</li>
                  <li>• Temperaturas extremas</li>
                  <li>• Condiciones para vuelo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Quieres recibir alertas personalizadas para tu provincia?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('subscribe');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-honey-400 hover:bg-honey-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Suscribirse Ahora
          </button>
        </div>
      </div>
    </section>
  );
}
