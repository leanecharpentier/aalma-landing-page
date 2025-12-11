const Features = () => {
  return (
    <section id="ressources" className="py-20 px-6 md:px-24">
      <div className="flex flex-col md:flex-row gap-12 items-stretch">
        {/* Partie gauche : Image (50%) */}
        <div className="w-full md:w-1/2 flex">
          <div className="w-full h-full bg-gray-300 rounded-lg"></div>
        </div>
        {/* Partie droite : 4 blocs en grille 2x2 (50%) */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bloc 1 */}
            <div className="p-4">
              <div className="flex flex-col items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-primary rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  Dashboard en temps réel par service et global
                </h3>
                <p className="text-sm text-gray-600">
                  Visualisez l'état de la santé mentale de vos collaborateurs avec des données en
                  direct, par service et à l'échelle de l'entreprise. Pilotez vos indicateurs avec
                  une vue d'ensemble claire et précise.
                </p>
              </div>
            </div>

            {/* Bloc 2 */}
            <div className="p-4">
              <div className="flex flex-col items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-primary rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  Synthèse de données avec propositions de solutions
                </h3>
                <p className="text-sm text-gray-600">
                  Bénéficiez d'une analyse intelligente de vos données avec des recommandations
                  personnalisées : ateliers collaboratifs, activités de cohésion, teambuilding,
                  séminaires et événements pour redonner une dimension humaine à votre entreprise.
                </p>
              </div>
            </div>

            {/* Bloc 3 */}
            <div className="p-4">
              <div className="flex flex-col items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-primary rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  Bibliothèque d'ateliers par thématique
                </h3>
                <p className="text-sm text-gray-600">
                  Accédez à une bibliothèque complète d'ateliers et d'activités organisés par
                  thématique : mois sans tabac, journée mondiale du handicap, bien-être au
                  travail, et bien plus encore. Des ressources prêtes à l'emploi pour vos équipes.
                </p>
              </div>
            </div>

            {/* Bloc 4 */}
            <div className="p-4">
              <div className="flex flex-col items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-primary rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  Génération d'infographies synthétiques avec stats clés
                </h3>
                <p className="text-sm text-gray-600">
                  Communiquez facilement vos résultats grâce à des infographies synthétiques
                  générées automatiquement. Partagez les statistiques clés avec la direction, les
                  équipes ou le CSE en toute simplicité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

