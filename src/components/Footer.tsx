'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-honey-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🐝</span>
              </div>
              <span className="ml-2 text-xl font-bold">ApiAgenda</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              La plataforma de calendario y alertas diseñada específicamente 
              para apicultores argentinos. Información localizada y confiable 
              para optimizar tu temporada apícola.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-honey-400 transition-colors"
                aria-label="Facebook"
              >
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-honey-400 transition-colors"
                aria-label="Instagram"
              >
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-honey-400 transition-colors"
                aria-label="WhatsApp"
              >
                <span className="sr-only">WhatsApp</span>
                📱
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-honey-400 transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="text-gray-300 hover:text-honey-400 transition-colors"
                >
                  Beneficios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('calendar')}
                  className="text-gray-300 hover:text-honey-400 transition-colors"
                >
                  Calendario
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('subscribe')}
                  className="text-gray-300 hover:text-honey-400 transition-colors"
                >
                  Suscribirse
                </button>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:info@apiagenda.com"
                  className="hover:text-honey-400 transition-colors"
                >
                  info@apiagenda.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                <a
                  href="https://wa.me/5491123456789"
                  className="hover:text-honey-400 transition-colors"
                >
                  +54 9 11 2345-6789
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>
                  Buenos Aires, Argentina<br />
                  Servicio Nacional
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ApiAgenda. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-honey-400 transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-honey-400 transition-colors"
              >
                Términos de Servicio
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-honey-400 transition-colors"
              >
                Ayuda
              </a>
            </div>
          </div>
        </div>

        {/* Local relevance notice */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <div className="flex items-start">
            <span className="text-honey-400 mr-3 mt-1">🇦🇷</span>
            <div>
              <h4 className="font-semibold text-honey-400 mb-1">
                Información Local para Apicultores Argentinos
              </h4>
              <p className="text-gray-300 text-sm">
                Nuestro contenido está específicamente adaptado para las condiciones 
                climáticas, florales y apícolas de Argentina. Trabajamos con datos 
                locales y especialistas de cada región para brindarte la información 
                más relevante para tu actividad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
