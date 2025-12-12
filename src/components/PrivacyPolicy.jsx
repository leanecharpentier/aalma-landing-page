import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const PrivacyPolicy = () => {
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
                            Politique de confidentialité
                        </h1>
                        <p className="text-gray-600">
                            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="bg-primary-lightest border-l-4 border-primary p-6 mb-8 rounded-r-lg">
                        <p className="text-gray-800 leading-relaxed">
                            Chez Aalma, la protection de vos données personnelles et la garantie
                            de votre anonymat sont nos priorités absolues. Cette politique de
                            confidentialité explique comment nous collectons, utilisons, stockons
                            et protégeons vos données conformément au Règlement Général sur la
                            Protection des Données (RGPD).
                        </p>
                    </div>

                    {/* Contenu */}
                    <div className="prose prose-lg max-w-none space-y-8">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                1. Responsable du traitement
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Le responsable du traitement des données personnelles est :
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700">
                                    <strong>Aalma</strong>
                                    <br />
                                    Email :{" "}
                                    <a
                                        href="mailto:aalma.contact@google.com"
                                        className="text-primary hover:underline"
                                    >
                                        aalma.contact@google.com
                                    </a>
                                </p>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                2. Données collectées
                            </h2>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                2.1. Données collectées via le formulaire de contact
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Lorsque vous utilisez notre formulaire de contact, nous collectons :
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                                <li>Nom et prénom</li>
                                <li>Adresse email</li>
                                <li>Numéro de téléphone (optionnel)</li>
                                <li>Objet de votre demande</li>
                                <li>Message</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 text-gray-800 mt-6">
                                2.2. Données collectées via la plateforme
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Lors de l'utilisation de notre plateforme SaaS, nous collectons
                                des données anonymisées concernant :
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Le bien-être et la santé mentale des collaborateurs (données anonymisées)</li>
                                <li>Les métriques d'utilisation de la plateforme</li>
                                <li>Les données de connexion (adresses IP, logs) pour des raisons de sécurité</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                3. Finalités du traitement
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Nous utilisons vos données personnelles pour :
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>
                                    <strong>Gérer vos demandes de contact :</strong> répondre à vos
                                    questions, traiter vos demandes de devis ou de démonstration
                                </li>
                                <li>
                                    <strong>Fournir et améliorer notre service :</strong> assurer le
                                    bon fonctionnement de la plateforme et développer de nouvelles
                                    fonctionnalités
                                </li>
                                <li>
                                    <strong>Communication marketing :</strong> uniquement si vous
                                    avez donné votre consentement, vous envoyer des informations
                                    sur nos services (vous pouvez vous désinscrire à tout moment)
                                </li>
                                <li>
                                    <strong>Obligations légales :</strong> respecter nos obligations
                                    légales et réglementaires
                                </li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                4. Base légale du traitement
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Le traitement de vos données personnelles est basé sur :
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>
                                    <strong>Votre consentement :</strong> pour les communications
                                    marketing et l'utilisation de cookies non essentiels
                                </li>
                                <li>
                                    <strong>L'exécution d'un contrat :</strong> pour la fourniture
                                    de nos services
                                </li>
                                <li>
                                    <strong>L'intérêt légitime :</strong> pour l'amélioration de
                                    nos services et la sécurité de notre plateforme
                                </li>
                                <li>
                                    <strong>Les obligations légales :</strong> pour respecter nos
                                    obligations réglementaires
                                </li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                5. Anonymisation et protection des données
                            </h2>
                            <div className="bg-primary-lightest border-l-4 border-primary p-6 rounded-r-lg mb-4">
                                <p className="text-gray-800 leading-relaxed font-semibold mb-2">
                                    Garantie d'anonymat
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Toutes les données collectées concernant le bien-être et la
                                    santé mentale des collaborateurs sont <strong>anonymisées</strong>{" "}
                                    dès leur collecte. Il est impossible pour Aalma ou pour votre
                                    employeur d'identifier un collaborateur individuel à partir des
                                    données anonymisées.
                                </p>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Nous mettons en œuvre des mesures techniques et organisationnelles
                                appropriées pour protéger vos données :
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Chiffrement des données en transit (HTTPS/TLS)</li>
                                <li>Chiffrement des données au repos</li>
                                <li>Accès restreint aux données personnelles</li>
                                <li>Anonymisation systématique des données sensibles</li>
                                <li>Surveillance et détection des intrusions</li>
                                <li>Sauvegardes régulières et sécurisées</li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                6. Conservation des données
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Nous conservons vos données personnelles uniquement pendant la
                                durée nécessaire aux finalités pour lesquelles elles ont été
                                collectées :
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>
                                    <strong>Données de contact :</strong> 3 ans à compter du dernier
                                    contact
                                </li>
                                <li>
                                    <strong>Données de la plateforme :</strong> durée de la
                                    relation contractuelle, puis 3 ans après la fin du contrat
                                </li>
                                <li>
                                    <strong>Données anonymisées :</strong> conservées de manière
                                    anonyme pour des analyses statistiques, sans limitation de
                                    durée
                                </li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                Passé ces délais, vos données sont supprimées ou anonymisées de
                                manière irréversible.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                7. Partage des données
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Nous ne vendons jamais vos données personnelles. Nous pouvons
                                partager vos données uniquement dans les cas suivants :
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>
                                    <strong>Prestataires de services :</strong> nous pouvons faire
                                    appel à des prestataires tiers (hébergement, emailing) qui
                                    traitent vos données en notre nom et sous notre contrôle, dans
                                    le respect du RGPD
                                </li>
                                <li>
                                    <strong>Obligations légales :</strong> si la loi nous y oblige
                                    ou pour protéger nos droits légitimes
                                </li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                Tous nos prestataires sont soumis à des obligations strictes de
                                confidentialité et de sécurité.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                8. Vos droits
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Conformément au RGPD, vous disposez des droits suivants concernant
                                vos données personnelles :
                            </p>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">
                                        Droit d'accès
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        Vous pouvez demander une copie de vos données personnelles
                                        que nous détenons.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">
                                        Droit de rectification
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        Vous pouvez demander la correction de données inexactes ou
                                        incomplètes.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">
                                        Droit à l'effacement
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        Vous pouvez demander la suppression de vos données
                                        personnelles dans certains cas.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">
                                        Droit à la limitation du traitement
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        Vous pouvez demander la limitation du traitement de vos
                                        données dans certains cas.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">
                                        Droit à la portabilité
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        Vous pouvez demander à recevoir vos données dans un format
                                        structuré et couramment utilisé.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">
                                        Droit d'opposition
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        Vous pouvez vous opposer au traitement de vos données pour
                                        des motifs légitimes, notamment pour les communications
                                        marketing.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">
                                        Droit de retirer votre consentement
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        Vous pouvez retirer votre consentement à tout moment pour
                                        les traitements basés sur le consentement.
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mt-6">
                                Pour exercer ces droits, contactez-nous à l'adresse{" "}
                                <a
                                    href="mailto:aalma.contact@google.com"
                                    className="text-primary hover:underline"
                                >
                                    aalma.contact@google.com
                                </a>
                                . Nous répondrons à votre demande dans un délai d'un mois.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                Vous avez également le droit d'introduire une réclamation auprès de
                                la Commission Nationale de l'Informatique et des Libertés (CNIL)
                                si vous estimez que le traitement de vos données personnelles
                                constitue une violation du RGPD.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                9. Cookies et technologies similaires
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Notre site web utilise des cookies et technologies similaires pour :
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Assurer le bon fonctionnement du site</li>
                                <li>Améliorer votre expérience utilisateur</li>
                                <li>Analyser l'utilisation du site (avec votre consentement)</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                Vous pouvez gérer vos préférences de cookies via les paramètres de
                                votre navigateur.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                10. Transferts internationaux
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Vos données personnelles sont stockées et traitées au sein de
                                l'Union Européenne. En cas de transfert vers un pays tiers, nous
                                nous assurons que des garanties appropriées sont en place pour
                                protéger vos données conformément au RGPD.
                            </p>
                        </section>

                        {/* Section 11 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                11. Modifications de cette politique
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Nous pouvons modifier cette politique de confidentialité à tout
                                moment. Les modifications entreront en vigueur dès leur publication
                                sur cette page. Nous vous encourageons à consulter régulièrement
                                cette page pour rester informé de la manière dont nous protégeons
                                vos données.
                            </p>
                        </section>

                        {/* Section 12 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                12. Contact
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Pour toute question concernant cette politique de confidentialité
                                ou pour exercer vos droits, vous pouvez nous contacter à l'adresse{" "}
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

export default PrivacyPolicy;

