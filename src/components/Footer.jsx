import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        if (!isHomePage) {
            return;
        }
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="grid md:grid-cols-4 gap-8 px-6 md:px-24 mb-8">
                {/* Logo / Nom */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">Aalma</h3>
                    <p className="text-gray-400 text-sm">
                        La plateforme SaaS qui rend la santé mentale mesurable
                        et actionnable dans votre entreprise.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="font-semibold mb-4">Navigation</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            {isHomePage ? (
                                <a
                                    href="#accueil"
                                    onClick={(e) => scrollToSection(e, "#accueil")}
                                    className="hover:text-white transition"
                                >
                                    Accueil
                                </a>
                            ) : (
                                <Link
                                    to="/"
                                    className="hover:text-white transition"
                                >
                                    Accueil
                                </Link>
                            )}
                        </li>
                        {isHomePage && (
                            <>
                                <li>
                                    <a
                                        href="#solutions"
                                        onClick={(e) =>
                                            scrollToSection(e, "#solutions")
                                        }
                                        className="hover:text-white transition"
                                    >
                                        Solutions
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#ressources"
                                        onClick={(e) =>
                                            scrollToSection(e, "#ressources")
                                        }
                                        className="hover:text-white transition"
                                    >
                                        Ressources
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        onClick={(e) => scrollToSection(e, "#contact")}
                                        className="hover:text-white transition"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Informations */}
                <div>
                    <h4 className="font-semibold mb-4">Informations</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <a href="#" className="hover:text-white transition">
                                À propos
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/politique-confidentialite"
                                className="hover:text-white transition"
                            >
                                Confidentialité
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/conditions-utilisation"
                                className="hover:text-white transition"
                            >
                                Mentions légales
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <a
                                href="mailto:aalma.contact@google.com"
                                className="hover:text-white transition"
                            >
                                aalma.contact@google.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
                <p>&copy; 2025 Aalma. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
