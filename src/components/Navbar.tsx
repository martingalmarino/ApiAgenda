'use client';

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-honey-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🐝</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                ApiAgenda
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-honey-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-gray-700 hover:text-honey-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollToSection('calendar')}
                className="text-gray-700 hover:text-honey-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Calendario
              </button>
              <button
                onClick={() => scrollToSection('subscribe')}
                className="bg-honey-400 hover:bg-honey-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Suscribirse
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-honey-500 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-honey-500 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-honey-500 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('calendar')}
              className="text-gray-700 hover:text-honey-500 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Calendario
            </button>
            <button
              onClick={() => scrollToSection('subscribe')}
              className="bg-honey-400 hover:bg-honey-500 text-white block px-3 py-2 text-base font-medium w-full text-left rounded-lg mt-2"
            >
              Suscribirse
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
