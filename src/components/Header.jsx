import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/images/logo-aalma-orange.png";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        setIsMobileMenuOpen(false);
    };

    const handleLogoClick = (e) => {
        if (!isHomePage) {
            return; // Link will handle navigation
        }
        e.preventDefault();
        scrollToSection(e, "#accueil");
    };

    return (
        <header className="px-6 md:px-24 py-6">
            <nav className="flex items-center justify-between">
                {/* Partie gauche : Logo + Navigation */}
                <div className="flex items-center space-x-8">
                    {/* Logo */}
                    <div>
                        {isHomePage ? (
                            <a
                                href="#accueil"
                                onClick={handleLogoClick}
                                className="block"
                            >
                                <img
                                    src={logoImage}
                                    alt="Aalma Logo"
                                    className="h-10 md:h-12 w-auto"
                                />
                            </a>
                        ) : (
                            <Link to="/" className="block">
                                <img
                                    src={logoImage}
                                    alt="Aalma Logo"
                                    className="h-10 md:h-12 w-auto"
                                />
                            </Link>
                        )}
                    </div>
                    {/* Navigation */}
                    <ul
                        className={`hidden md:flex items-center space-x-6 ${
                            isMobileMenuOpen
                                ? "flex flex-col absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg"
                                : ""
                        }`}
                    >
                        <li>
                            {isHomePage ? (
                                <a
                                    href="#accueil"
                                    onClick={(e) => scrollToSection(e, "#accueil")}
                                    className="hover:text-primary transition"
                                >
                                    Accueil
                                </a>
                            ) : (
                                <Link
                                    to="/"
                                    className="hover:text-primary transition"
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
                                        className="hover:text-primary transition"
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
                                        className="hover:text-primary transition"
                                    >
                                        Ressources
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                {/* Partie droite : CTA */}
                <div className="flex items-center space-x-4">
                    <button className="hidden md:block text-black border border-neutral-700 rounded-full px-6 py-2 hover:text-white hover:bg-neutral-700 transition">
                        Connexion
                    </button>
                    {isHomePage ? (
                        <button
                            onClick={(e) => scrollToSection(e, "#contact")}
                            className="hidden md:block bg-primary text-black px-6 py-2 rounded-full hover:bg-primary-light transition"
                        >
                            Essai
                        </button>
                    ) : (
                        <Link
                            to="/#contact"
                            className="hidden md:block bg-primary text-black px-6 py-2 rounded-full hover:bg-primary-light transition"
                        >
                            Essai
                        </Link>
                    )}
                    {/* Menu mobile */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </nav>
            {/* Menu mobile déroulant */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 bg-white p-4 rounded-lg shadow-lg">
                    <ul className="flex flex-col space-y-4">
                        <li>
                            {isHomePage ? (
                                <a
                                    href="#accueil"
                                    onClick={(e) => scrollToSection(e, "#accueil")}
                                    className="hover:text-primary transition block"
                                >
                                    Accueil
                                </a>
                            ) : (
                                <Link
                                    to="/"
                                    className="hover:text-primary transition block"
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
                                        className="hover:text-primary transition block"
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
                                        className="hover:text-primary transition block"
                                    >
                                        Ressources
                                    </a>
                                </li>
                            </>
                        )}
                        <li>
                            <button className="text-black border border-neutral-700 rounded-full px-6 py-2 hover:text-white hover:bg-neutral-700 transition w-full text-center">
                                Connexion
                            </button>
                        </li>
                        <li>
                            {isHomePage ? (
                                <button
                                    onClick={(e) => scrollToSection(e, "#contact")}
                                    className="bg-primary text-black px-6 py-2 rounded-full hover:bg-primary-light transition w-full"
                                >
                                    Essai
                                </button>
                            ) : (
                                <Link
                                    to="/#contact"
                                    className="bg-primary text-black px-6 py-2 rounded-full hover:bg-primary-light transition w-full text-center block"
                                >
                                    Essai
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
