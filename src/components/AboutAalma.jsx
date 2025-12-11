const AboutAalma = () => {
  return (
    <section className="px-6 md:px-24 py-20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Partie gauche : Nom Aalma (50%) */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Aalma</h2>
        </div>
        {/* Partie droite : Texte (50%) */}
        <div className="w-full md:w-1/2">
          <p className="text-lg md:text-xl text-gray-600">
            Une plateforme SaaS innovante qui rend tangible la santé mentale au travail. Mesurez, analysez
            et agissez avec des indicateurs clairs et des leviers d'action concrets pour améliorer le
            bien-être de vos équipes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAalma;

