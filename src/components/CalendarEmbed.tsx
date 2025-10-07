'use client';

import { useEffect, useRef } from 'react';
import { Calendar, Crown, ExternalLink } from 'lucide-react';

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

  // Google Calendar configuration
  const calendarId = '2cc584bd51ff6e36cae55d6feab07802f8543576414ca088fb713e40c2f680cf@group.calendar.google.com';
  const timeZone = 'America/Argentina/Buenos_Aires';
  
  // Generate Google Calendar embed URL
  const embedUrl = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=${encodeURIComponent(timeZone)}&mode=MONTH&showTitle=0&showNav=1&showDate=1&showTabs=1&showCalendars=0&showTz=0`;
  
  // Generate "Add to Calendar" URL
  const addToCalendarUrl = `https://calendar.google.com/calendar/render?cid=${encodeURIComponent(calendarId)}`;

  return (
    <section
      id="calendar"
      ref={sectionRef}
      className="py-20 bg-gray-50"
      aria-label="Calendario Apícola"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Calendario Apícola
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Consulta las fechas clave de tratamientos, floraciones y alertas climáticas.
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Calendar header */}
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
              <div className="aspect-[4/3] w-full">
                <iframe
                  src={embedUrl}
                  style={{ border: 0 }}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  loading="lazy"
                  title="Calendario de Apicultura Argentina"
                  className="rounded-b-2xl"
                />
              </div>
            </div>

            {/* Add to Calendar link */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="text-center">
                <a
                  href={addToCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-field-600 hover:text-field-700 text-sm font-medium underline decoration-2 underline-offset-2 transition-colors"
                >
                  <Calendar className="h-4 w-4" />
                  Agregar este calendario a mi Google Calendar
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Calendar info */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-honey-600" />
                  Eventos Incluidos:
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-honey-400 rounded-full mt-2 flex-shrink-0"></span>
                    Ferias y exposiciones apícolas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-honey-400 rounded-full mt-2 flex-shrink-0"></span>
                    Cursos y capacitaciones
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-honey-400 rounded-full mt-2 flex-shrink-0"></span>
                    Temporadas de floración
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-honey-400 rounded-full mt-2 flex-shrink-0"></span>
                    Fechas de tratamientos preventivos
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-field-600" />
                  Alertas Climáticas:
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-field-400 rounded-full mt-2 flex-shrink-0"></span>
                    Pronósticos de lluvia
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-field-400 rounded-full mt-2 flex-shrink-0"></span>
                    Alertas de viento fuerte
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-field-400 rounded-full mt-2 flex-shrink-0"></span>
                    Temperaturas extremas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-field-400 rounded-full mt-2 flex-shrink-0"></span>
                    Condiciones para vuelo
                  </li>
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
