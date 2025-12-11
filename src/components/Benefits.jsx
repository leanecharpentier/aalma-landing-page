const Benefits = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="my-24 px-6 md:px-24 py-20 bg-gray-50">
      {/* En-tête centré */}
      <div className="text-center mb-16">
        <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Bénéfices</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Une plateforme unique, des bénéfices pour chaque décisionnaire
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Que vous soyez chef d'entreprise, manager ou référent santé mentale, Aalma s'adapte à vos besoins
          spécifiques. Chacun trouve sa place dans cette plateforme pour améliorer le bien-être au travail.
        </p>
      </div>

      {/* 3 blocs en ligne */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Bloc 1 : Chef d'entreprise */}
        <div className="text-center p-6">
          <div className="mb-4 flex justify-center">
            {/* Icon placeholder */}
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Chef d'entreprise</h3>
          <p className="text-gray-600">
            Améliorez votre image de marque et votre positionnement employeur grâce à une démarche RSE
            crédible et mesurable. Attirez les top talents en démontrant votre engagement pour le bien-être
            de vos équipes.
          </p>
        </div>

        {/* Bloc 2 : Référents de la santé mental */}
        <div className="text-center p-6">
          <div className="mb-4 flex justify-center">
            {/* Icon placeholder */}
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Référents de la santé mentale</h3>
          <p className="text-gray-600">
            Visualisez votre impact à travers des statistiques claires et mesurables. Suivez l'évolution du
            bien-être dans votre organisation et démontrez la valeur de vos actions avec des données
            tangibles.
          </p>
        </div>

        {/* Bloc 3 : Managers */}
        <div className="text-center p-6">
          <div className="mb-4 flex justify-center">
            {/* Icon placeholder */}
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Managers</h3>
          <p className="text-gray-600">
            Bénéficiez de solutions concrètes pour améliorer la santé mentale de vos équipes et ainsi leur
            productivité. Accédez à des recommandations personnalisées adaptées aux besoins spécifiques de
            votre service.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={(e) => scrollToSection(e, '#contact')}
          className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition font-medium text-lg"
        >
          Commencer
        </button>
      </div>
    </section>
  );
};

export default Benefits;

