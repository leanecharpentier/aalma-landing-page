import logoAalmaOrange from "../assets/images/logo-aalma-orange.png";

const AboutAalma = () => {
    return (
        <section className="px-6 md:px-24 py-20 bg-primary-lightest">
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Partie gauche : Logo (50%) */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                    <img
                        src={logoAalmaOrange}
                        alt="Logo Aalma"
                        className="max-w-full h-auto"
                    />
                </div>
                {/* Partie droite : Texte (50%) */}
                <div className="w-full md:w-1/2">
                    <p className="text-lg md:text-lg text-black">
                        Une plateforme SaaS innovante qui rend tangible la santé
                        mentale au travail. Mesurez, analysez et agissez avec
                        des indicateurs clairs et des leviers d'action concrets
                        pour améliorer le bien-être de vos équipes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutAalma;
