const WhyAalma = () => {
    return (
        <section id="solutions" className="w-full px-6 md:px-24 py-20">
            {/* En-tête */}
            <div className="text-left md:text-center mb-16">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">
                    Pourquoi
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Pourquoi choisir Aalma ?
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl md:mx-auto">
                    Une solution adaptée à chaque décisionnaire pour transformer
                    la santé mentale en levier de performance.
                </p>
            </div>

            {/* 3 blocs côte à côte */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Bloc 1 : Pour le PDG */}
                <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-6">
                    <div className="mb-4">
                        {/* Icon placeholder */}
                        <div className="w-12 h-12 flex items-center mb-2">
                            <svg
                                className="w-6 h-6 text-black"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                ></path>
                            </svg>
                        </div>
                        <p className="text-sm text-gray-700 mb-4">
                            Pour le PDG
                        </p>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                        Renforcez votre marque employeur et attirez les top
                        talents
                    </h3>
                    <p className="text-black mb-3">
                        Améliorez votre image de marque et votre positionnement
                        employeur grâce à une démarche RSE crédible et
                        mesurable. Attirez et retenez les meilleurs talents en
                        démontrant votre engagement concret pour le bien-être de
                        vos équipes.
                    </p>
                </div>

                {/* Bloc 2 : Pour le Manager */}
                <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-6">
                    <div className="mb-4">
                        {/* Icon placeholder */}
                        <div className="w-12 h-12 flex items-center mb-2">
                            <svg
                                className="w-6 h-6 text-black"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                ></path>
                            </svg>
                        </div>
                        <p className="text-sm text-gray-700 mb-4">
                            Pour le Manager
                        </p>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                        Visualisez l'état de votre équipe et agissez
                        efficacement
                    </h3>
                    <p className="text-black mb-3">
                        Accédez à une vision claire de la santé mentale de votre
                        équipe avec des données en temps réel. Bénéficiez de
                        solutions concrètes et personnalisées pour améliorer le
                        bien-être et la productivité de vos collaborateurs.
                    </p>
                </div>

                {/* Bloc 3 : Pour les RH/CSE */}
                <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-6">
                    <div className="mb-4">
                        {/* Icon placeholder */}
                        <div className="w-12 h-12 flex items-center mb-2">
                            <svg
                                className="w-6 h-6 text-black"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                ></path>
                            </svg>
                        </div>
                        <p className="text-sm text-gray-700 mb-4">
                            Pour les RH/CSE
                        </p>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                        Des données tangibles et des actions concrètes à mettre
                        en place
                    </h3>
                    <p className="text-black mb-3">
                        Obtenez des indicateurs fiables sur la santé mentale de
                        votre organisation et valorisez-les dans vos démarches
                        ESG/RSE. Recevez des recommandations d'actions ciblées
                        pour améliorer le bien-être collectif.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyAalma;
