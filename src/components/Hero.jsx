const Hero = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="accueil" className="px-6 md:px-24 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Partie gauche : Contenu */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Rendez la santé mentale mesurable et actionnable dans votre entreprise
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Aalma est la plateforme SaaS qui transforme la santé mentale en indicateurs fiables. Améliorez
            votre marque employeur, attirez les top talents et pilotez le bien-être de vos collaborateurs
            avec des données tangibles et des actions concrètes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition font-medium">
              Démonstration gratuite
            </button>
            <button
              onClick={(e) => scrollToSection(e, '#contact')}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-primary hover:text-primary transition font-medium"
            >
              Contact
            </button>
          </div>
        </div>
        {/* Partie droite : Image placeholder */}
        <div className="flex-1 grow">
          <div className="w-full h-96 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

