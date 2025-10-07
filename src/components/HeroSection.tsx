'use client';

import { useEffect, useRef } from 'react';
import { Calendar, Smartphone, Thermometer } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSubscribe = () => {
    const element = document.getElementById('subscribe');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-honey-50 via-white to-field-50 pt-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-honey-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-field-200 rounded-full opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Organiza tu{' '}
            <span className="text-honey-500">temporada apícola</span>{' '}
            con alertas confiables
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Recibe recordatorios para tratamientos, floraciones y eventos climáticos 
            específicos de tu provincia en Argentina.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToSubscribe}
              className="bg-honey-400 hover:bg-honey-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Suscribirse para Alertas
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('calendar');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-field-400 text-field-600 hover:bg-field-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
            >
              Ver Calendario
            </button>
          </div>

          {/* Stats or features preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-honey-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-honey-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Calendario Nacional
              </h3>
              <p className="text-gray-600">
                Eventos apícolas de todas las provincias argentinas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-field-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-field-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Alertas Personalizadas
              </h3>
              <p className="text-gray-600">
                WhatsApp y email según tu ubicación
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-honey-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-honey-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Datos Climáticos
              </h3>
              <p className="text-gray-600">
                Información meteorológica relevante
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
