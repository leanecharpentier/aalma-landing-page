const CTASection = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="px-4 py-20">
      <div className="border-2 border-gray-200 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Prêt à réhumaniser le travail dans votre entreprise ?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Découvrez comment Aalma peut transformer la santé mentale en levier de performance. Profitez d'un
          essai gratuit de 8 semaines pour tester notre plateforme et constater les résultats concrets sur
          votre organisation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-primary hover:text-primary transition font-medium text-center"
          >
            Contacter
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition font-medium text-center"
          >
            Essai gratuit 8 semaines
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

