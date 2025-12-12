import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const TermsOfService = () => {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            <Header />
            <main className="px-4 md:px-24 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    {/* En-tête */}
                    <div className="mb-12">
                        <Link
                            to="/"
                            className="text-primary hover:text-primary-dark transition inline-flex items-center mb-6"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            Retour à l'accueil
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Conditions d'utilisation
                        </h1>
                        <p className="text-gray-600">
                            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    {/* Contenu */}
                    <div className="prose prose-lg max-w-none space-y-8">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                1. Acceptation des conditions
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                En accédant et en utilisant la plateforme Aalma, vous acceptez
                                d'être lié par les présentes conditions d'utilisation. Si vous
                                n'acceptez pas ces conditions, veuillez ne pas utiliser notre
                                service.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                2. Description du service
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Aalma est une plateforme SaaS dédiée à la mesure et à l'amélioration
                                de la santé mentale en entreprise. Notre service permet aux
                                organisations de :
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Collecter et analyser des données anonymisées sur le bien-être des collaborateurs</li>
                                <li>Générer des rapports et des insights actionnables</li>
                                <li>Mettre en place des actions préventives pour améliorer la santé mentale au travail</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                3. Utilisation du service
                            </h2>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                3.1. Conditions d'éligibilité
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Pour utiliser Aalma, vous devez :
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                                <li>Être une entreprise ou une organisation légale</li>
                                <li>Avoir l'autorité pour accepter ces conditions au nom de votre organisation</li>
                                <li>Fournir des informations exactes et à jour lors de l'inscription</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 text-gray-800 mt-6">
                                3.2. Obligations de l'utilisateur
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Vous vous engagez à :
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Utiliser le service conformément à la législation applicable</li>
                                <li>Respecter la confidentialité et l'anonymat des données collectées</li>
                                <li>Ne pas tenter d'accéder à des zones non autorisées du service</li>
                                <li>Ne pas utiliser le service à des fins illégales ou frauduleuses</li>
                                <li>Maintenir la sécurité de vos identifiants de connexion</li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                4. Protection des données et confidentialité
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                La protection de vos données est une priorité pour Aalma. Toutes
                                les données collectées sont :
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                                <li>Anonymisées conformément au RGPD</li>
                                <li>Chiffrées et stockées de manière sécurisée</li>
                                <li>Utilisées uniquement dans le cadre de la fourniture du service</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                Pour plus d'informations sur le traitement de vos données, veuillez
                                consulter notre{" "}
                                <Link
                                    to="/politique-confidentialite"
                                    className="text-primary hover:underline"
                                >
                                    politique de confidentialité
                                </Link>
                                .
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                5. Propriété intellectuelle
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Tous les contenus présents sur la plateforme Aalma, incluant mais
                                sans s'y limiter : textes, graphiques, logos, icônes, images,
                                clips audio, téléchargements numériques, et compilations de données,
                                sont la propriété d'Aalma ou de ses fournisseurs de contenu et sont
                                protégés par les lois françaises et internationales sur la propriété
                                intellectuelle.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Vous n'êtes pas autorisé à reproduire, distribuer, modifier, créer
                                des œuvres dérivées, afficher publiquement, représenter publiquement,
                                republier, télécharger, stocker ou transmettre tout contenu de notre
                                plateforme sans notre autorisation écrite préalable.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                6. Limitation de responsabilité
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Aalma s'efforce de fournir un service fiable et sécurisé. Cependant,
                                nous ne garantissons pas que :
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                                <li>Le service sera ininterrompu, sécurisé ou exempt d'erreurs</li>
                                <li>Les défauts seront corrigés</li>
                                <li>Le service ou le serveur qui le rend disponible sont exempts de virus ou autres composants nuisibles</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                Dans la mesure permise par la loi, Aalma ne pourra être tenu
                                responsable des dommages directs, indirects, accessoires, spéciaux
                                ou consécutifs résultant de l'utilisation ou de l'impossibilité
                                d'utiliser notre service.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                7. Modification des conditions
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Aalma se réserve le droit de modifier ces conditions d'utilisation à
                                tout moment. Les modifications entreront en vigueur dès leur
                                publication sur cette page. Il est de votre responsabilité de
                                consulter régulièrement ces conditions. Votre utilisation continue
                                du service après la publication des modifications constitue votre
                                acceptation des nouvelles conditions.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                8. Résiliation
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Aalma se réserve le droit de suspendre ou de résilier votre accès
                                au service, sans préavis, pour toute raison, notamment en cas de :
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                                <li>Violation de ces conditions d'utilisation</li>
                                <li>Utilisation frauduleuse ou abusive du service</li>
                                <li>Non-paiement des frais dus</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                Vous pouvez résilier votre compte à tout moment en nous contactant
                                à l'adresse{" "}
                                <a
                                    href="mailto:aalma.contact@google.com"
                                    className="text-primary hover:underline"
                                >
                                    aalma.contact@google.com
                                </a>
                                .
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                9. Droit applicable et juridiction
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Les présentes conditions d'utilisation sont régies par le droit
                                français. Tout litige relatif à ces conditions sera soumis à la
                                compétence exclusive des tribunaux français.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                10. Contact
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Pour toute question concernant ces conditions d'utilisation, vous
                                pouvez nous contacter à l'adresse{" "}
                                <a
                                    href="mailto:aalma.contact@google.com"
                                    className="text-primary hover:underline"
                                >
                                    aalma.contact@google.com
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;

