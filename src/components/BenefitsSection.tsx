'use client';

import { useEffect, useRef } from 'react';
import { Target, MessageSquare, MapPin } from 'lucide-react';

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
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

  const benefits = [
    {
      icon: Target,
      title: 'Alertas Personalizadas',
      description: 'Recibe notificaciones específicas para tu provincia con información sobre tratamientos, floraciones y condiciones climáticas ideales para la apicultura.',
      color: 'honey'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp & Email',
      description: 'Mantente informado a través de múltiples canales. Recibe recordatorios por WhatsApp y emails detallados con toda la información que necesitas.',
      color: 'field'
    },
    {
      icon: MapPin,
      title: 'Contenido por Provincia',
      description: 'Información específica para cada provincia argentina, considerando las diferencias climáticas y florales que afectan a tus colmenas.',
      color: 'honey'
    }
  ];

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir ApiAgenda?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una plataforma diseñada específicamente para apicultores argentinos, 
            con información localizada y alertas personalizadas.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  benefit.color === 'honey' 
                    ? 'bg-honey-100' 
                    : 'bg-field-100'
                }`}>
                  <IconComponent className={`h-8 w-8 ${
                    benefit.color === 'honey' 
                      ? 'text-honey-600' 
                      : 'text-field-600'
                  }`} />
                </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

                {/* Decorative element */}
                <div className={`mt-6 w-12 h-1 rounded-full ${
                  benefit.color === 'honey' 
                    ? 'bg-honey-400' 
                    : 'bg-field-400'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Información Científica y Local
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nuestras alertas están basadas en datos científicos y conocimiento local 
              de cada región. Trabajamos con apicultores experimentados y especialistas 
              para brindarte la información más precisa y útil para tu actividad.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="bg-honey-100 text-honey-700 px-4 py-2 rounded-full text-sm font-medium">
                Datos Meteorológicos
              </span>
              <span className="bg-field-100 text-field-700 px-4 py-2 rounded-full text-sm font-medium">
                Calendario Florícola
              </span>
              <span className="bg-honey-100 text-honey-700 px-4 py-2 rounded-full text-sm font-medium">
                Tratamientos Preventivos
              </span>
              <span className="bg-field-100 text-field-700 px-4 py-2 rounded-full text-sm font-medium">
                Cosecha Óptima
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
