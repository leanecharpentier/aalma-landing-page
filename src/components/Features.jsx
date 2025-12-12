import featuresImage from "../assets/images/features-image.png";

const Features = () => {
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section id="ressources" className="py-20 px-6 md:px-24">
            <div className="flex flex-col md:flex-row gap-12 items-stretch">
                {/* Partie gauche : Image (50%) */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <img
                        src={featuresImage}
                        alt="Fonctionnalités Aalma"
                        className="w-full h-auto object-contain rounded-lg"
                    />
                </div>
                {/* Partie droite : 4 blocs en grille 2x2 (50%) */}
                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Bloc 1 */}
                        <div className="p-4">
                            <div className="flex flex-col items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 border-2 border-black rounded-full flex items-center justify-center mb-4">
                                    <span className="text-lg font-bold text-black">
                                        1
                                    </span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                                    Dashboard en temps réel par service et
                                    global
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Visualisez la santé mentale de vos
                                    collaborateurs en temps réel, par service et
                                    à l'échelle de l'entreprise.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 2 */}
                        <div className="p-4">
                            <div className="flex flex-col items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 border-2 border-black rounded-full flex items-center justify-center mb-4">
                                    <span className="text-lg font-bold text-black">
                                        2
                                    </span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                                    Synthèse de données avec propositions de
                                    solutions
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Analyse intelligente de vos données avec des
                                    recommandations personnalisées : ateliers,
                                    teambuilding et événements pour renforcer la
                                    cohésion.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 3 */}
                        <div className="p-4">
                            <div className="flex flex-col items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 border-2 border-black rounded-full flex items-center justify-center mb-4">
                                    <span className="text-lg font-bold text-black">
                                        3
                                    </span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                                    Bibliothèque d'ateliers par thématique
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Bibliothèque complète d'ateliers organisés
                                    par thématique : bien-être au travail,
                                    handicap, santé... Des ressources prêtes à
                                    l'emploi.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 4 */}
                        <div className="p-4">
                            <div className="flex flex-col items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 border-2 border-black rounded-full flex items-center justify-center mb-4">
                                    <span className="text-lg font-bold text-black">
                                        4
                                    </span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                                    Génération d'infographies synthétiques avec
                                    stats clés
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Infographies synthétiques générées
                                    automatiquement pour partager vos
                                    statistiques clés avec la direction, les
                                    équipes ou le CSE.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Bouton Découvrir */}
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={(e) => scrollToSection(e, "#contact")}
                            className="text-black border border-black px-8 py-3 rounded-full hover:bg-neutral-700 hover:text-white hover:border-neutral-700 transition font-medium"
                        >
                            Découvrir
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
