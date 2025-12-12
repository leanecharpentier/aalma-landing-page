import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { sendEmail } from "../config/emailjs";
import { validateFormData } from "../utils/validation";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        lastname: "",
        firstname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        terms: false,
        rgpd: false,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });
    const phoneInputRef = useRef(null);
    const phoneInstanceRef = useRef(null);
    const [isPhoneValid, setIsPhoneValid] = useState(true);

    // Initialiser intl-tel-input
    useEffect(() => {
        if (!phoneInputRef.current || !window.intlTelInput) return;

        const iti = window.intlTelInput(phoneInputRef.current, {
            initialCountry: "fr",
            preferredCountries: ["fr", "be", "ch", "ca", "us", "gb"],
            utilsScript:
                "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.3/build/js/utils.js",
            separateDialCode: true,
            nationalMode: false,
        });

        phoneInstanceRef.current = iti;

        // Écouter les changements
        const handleBlur = () => {
            if (phoneInputRef.current.value.trim() === "") {
                setIsPhoneValid(true);
            } else if (iti.isValidNumber()) {
                setIsPhoneValid(true);
            } else {
                setIsPhoneValid(false);
                setErrors((prev) => ({
                    ...prev,
                    phone: "Veuillez entrer un numéro de téléphone valide",
                }));
            }
        };

        const handleInput = () => {
            setIsPhoneValid(true);
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors.phone;
                return newErrors;
            });
        };

        phoneInputRef.current.addEventListener("blur", handleBlur);
        phoneInputRef.current.addEventListener("input", handleInput);

        return () => {
            if (phoneInputRef.current) {
                phoneInputRef.current.removeEventListener("blur", handleBlur);
                phoneInputRef.current.removeEventListener("input", handleInput);
            }
            if (phoneInstanceRef.current && phoneInstanceRef.current.destroy) {
                phoneInstanceRef.current.destroy();
            }
        };
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        // Effacer l'erreur du champ modifié
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitMessage({ type: "", text: "" });

        // Récupérer le numéro de téléphone au format international si renseigné
        let phoneNumber = "";
        if (
            phoneInputRef.current &&
            phoneInputRef.current.value.trim() !== ""
        ) {
            if (
                phoneInstanceRef.current &&
                phoneInstanceRef.current.isValidNumber()
            ) {
                phoneNumber = phoneInstanceRef.current.getNumber();
            } else {
                phoneNumber = phoneInputRef.current.value;
            }
        }

        const dataToValidate = {
            ...formData,
            phone: phoneNumber,
        };

        // Validation
        const validation = validateFormData(dataToValidate, isPhoneValid);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            await sendEmail(dataToValidate);
            setSubmitMessage({
                type: "success",
                text: "Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
            });

            // Réinitialiser le formulaire
            setFormData({
                lastname: "",
                firstname: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                terms: false,
                rgpd: false,
            });

            // Réinitialiser le sélecteur de pays
            if (phoneInstanceRef.current) {
                phoneInstanceRef.current.setCountry("fr");
            }
            if (phoneInputRef.current) {
                phoneInputRef.current.value = "";
            }
        } catch (error) {
            setSubmitMessage({
                type: "error",
                text:
                    error.message ||
                    "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="px-4 py-20">
            <h2 className="text-4xl font-bold text-center mb-12">
                Contactez-nous
            </h2>
            <div className="max-w-5xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Message de succès/erreur */}
                    {submitMessage.text && (
                        <div
                            className={`px-4 py-3 rounded-lg mb-4 ${
                                submitMessage.type === "success"
                                    ? "bg-green-100 border border-green-400 text-green-700"
                                    : "bg-red-100 border border-red-400 text-red-700"
                            }`}
                        >
                            {submitMessage.text}
                        </div>
                    )}

                    {/* Nom et Prénom côte à côte */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Nom */}
                        <div>
                            <label
                                htmlFor="lastname"
                                className="block text-sm font-medium mb-2"
                            >
                                Nom <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                                    errors.lastname
                                        ? "border-red-500 ring-2 ring-red-200"
                                        : "border-gray-300"
                                }`}
                            />
                            {errors.lastname && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.lastname}
                                </p>
                            )}
                        </div>

                        {/* Prénom */}
                        <div>
                            <label
                                htmlFor="firstname"
                                className="block text-sm font-medium mb-2"
                            >
                                Prénom <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                                    errors.firstname
                                        ? "border-red-500 ring-2 ring-red-200"
                                        : "border-gray-300"
                                }`}
                            />
                            {errors.firstname && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.firstname}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Email et Téléphone côte à côte */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                                    errors.email
                                        ? "border-red-500 ring-2 ring-red-200"
                                        : "border-gray-300"
                                }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Téléphone */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium mb-2"
                            >
                                Numéro de téléphone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                ref={phoneInputRef}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                                    errors.phone
                                        ? "border-red-500 ring-2 ring-red-200"
                                        : "border-gray-300"
                                }`}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.phone}
                                </p>
                            )}
                            <p className="text-xs text-gray-500 mt-1">
                                Sélectionnez votre pays et entrez votre numéro
                            </p>
                        </div>
                    </div>

                    {/* Objet du message */}
                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-sm font-medium mb-2"
                        >
                            Objet du message{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                                errors.subject
                                    ? "border-red-500 ring-2 ring-red-200"
                                    : "border-gray-300"
                            }`}
                        >
                            <option value="">Sélectionnez un objet</option>
                            <option value="devis">
                                Je souhaite obtenir un devis
                            </option>
                            <option value="demo">
                                Je souhaite avoir une démo
                            </option>
                            <option value="guide-rse-esg">
                                Je souhaite obtenir le guide RSE - ESG
                            </option>
                            <option value="autre">
                                Je souhaite obtenir plus d'informations
                            </option>
                        </select>
                        {errors.subject && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.subject}
                            </p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium mb-2"
                        >
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                                errors.message
                                    ? "border-red-500 ring-2 ring-red-200"
                                    : "border-gray-300"
                            }`}
                            placeholder="Votre message..."
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    {/* Checkbox conditions d'utilisation */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            required
                            className="mr-3 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label
                            htmlFor="terms"
                            className="text-sm text-gray-700"
                        >
                            J'accepte les{" "}
                            <Link
                                to="/conditions-utilisation"
                                className="text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                conditions d'utilisation
                            </Link>{" "}
                            et la{" "}
                            <Link
                                to="/politique-confidentialite"
                                className="text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                politique de confidentialité
                            </Link>{" "}
                            <span className="text-red-500">*</span>
                        </label>
                    </div>
                    {errors.terms && (
                        <p className="text-red-500 text-sm">{errors.terms}</p>
                    )}

                    {/* Checkbox consentement RGPD */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="rgpd"
                            name="rgpd"
                            checked={formData.rgpd}
                            onChange={handleChange}
                            className="mr-3 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label htmlFor="rgpd" className="text-sm text-gray-700">
                            J'accepte de recevoir des communications marketing
                            de la part d'Aalma (vous pouvez vous désinscrire à
                            tout moment)
                        </label>
                    </div>

                    {/* Mention RGPD */}
                    <p className="text-xs text-gray-500">
                        Les données collectées via ce formulaire sont traitées
                        conformément au RGPD. Pour plus d'informations,
                        consultez notre{" "}
                        <Link
                            to="/politique-confidentialite"
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            politique de confidentialité
                        </Link>
                        .
                    </p>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full md:w-auto bg-primary text-black px-8 py-3 rounded-full hover:bg-primary-light transition font-medium ${
                                isSubmitting
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                            }`}
                        >
                            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
