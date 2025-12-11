import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="px-6 md:px-24 py-6">
      <nav className="flex items-center justify-between">
        {/* Partie gauche : Logo + Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#accueil" onClick={(e) => scrollToSection(e, '#accueil')} className="text-primary">
              Logo
            </a>
          </div>
          {/* Navigation */}
          <ul className={`hidden md:flex items-center space-x-6 ${isMobileMenuOpen ? 'flex flex-col absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg' : ''}`}>
            <li>
              <a
                href="#accueil"
                onClick={(e) => scrollToSection(e, '#accueil')}
                className="hover:text-primary transition"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                onClick={(e) => scrollToSection(e, '#solutions')}
                className="hover:text-primary transition"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#ressources"
                onClick={(e) => scrollToSection(e, '#ressources')}
                className="hover:text-primary transition"
              >
                Ressources
              </a>
            </li>
          </ul>
        </div>
        {/* Partie droite : CTA */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-gray-700 hover:text-primary transition">
            Connexion
          </button>
          <button
            onClick={(e) => scrollToSection(e, '#contact')}
            className="hidden md:block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition"
          >
            Essai
          </button>
          {/* Menu mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Menu mobile déroulant */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white p-4 rounded-lg shadow-lg">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#accueil"
                onClick={(e) => scrollToSection(e, '#accueil')}
                className="hover:text-primary transition block"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                onClick={(e) => scrollToSection(e, '#solutions')}
                className="hover:text-primary transition block"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#ressources"
                onClick={(e) => scrollToSection(e, '#ressources')}
                className="hover:text-primary transition block"
              >
                Ressources
              </a>
            </li>
            <li>
              <button className="text-gray-700 hover:text-primary transition w-full text-left">
                Connexion
              </button>
            </li>
            <li>
              <button
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition w-full"
              >
                Essai
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

