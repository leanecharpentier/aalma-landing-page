const CTASection = () => {
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="px-4 py-20">
            <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-8 md:p-12 text-left md:text-center max-w-4xl md:mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Prêt à réhumaniser le travail dans votre entreprise ?
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    Découvrez comment Aalma peut transformer la santé mentale en
                    levier de performance. Profitez d'un essai gratuit de 8
                    semaines pour tester notre plateforme et constater les
                    résultats concrets sur votre organisation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center">
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, "#contact")}
                        className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-neutral-700 hover:text-white transition font-medium text-center"
                    >
                        Contacter
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, "#contact")}
                        className="bg-primary border border-primary text-black px-8 py-3 rounded-full hover:bg-primary-light hover:text-black hover:border-primary-light transition font-medium text-center"
                    >
                        Demander un devis
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
