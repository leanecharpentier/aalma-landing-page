import emailjs from "@emailjs/browser";

/**
 * Récupère le libellé de l'objet du message
 * @param {string} subjectValue - La valeur de l'objet
 * @returns {string} - Le libellé correspondant
 */
const getSubjectLabel = (subjectValue) => {
    const subjects = {
        devis: "Demander un devis",
        demo: "Demander une démo",
        autre: "Autre",
    };
    return subjects[subjectValue] || subjectValue;
};

/**
 * Envoie un email via EmailJS avec toutes les données du formulaire
 * @param {Object} formData - Les données du formulaire
 * @returns {Promise<Object>} - Résultat de l'envoi
 */
export const sendEmail = async (formData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log(serviceId, templateId, publicKey);
    if (!serviceId || !templateId || !publicKey) {
        throw new Error(
            "Les variables d'environnement EmailJS ne sont pas configurées"
        );
    }

    // Initialiser EmailJS avec la clé publique
    emailjs.init(publicKey);

    // Formater le libellé de l'objet
    const subjectLabel = getSubjectLabel(formData.subject);

    // Préparer les paramètres du template avec toutes les données
    const templateParams = {
        // Informations personnelles
        firstname: formData.firstname,
        lastname: formData.lastname,
        fullname: `${formData.firstname} ${formData.lastname}`,
        email: formData.email,
        phone: formData.phone || "Non renseigné",

        // Objet et message
        subject: subjectLabel,
        subject_value: formData.subject,
        message: formData.message,

        // Consentements
        rgpd_consent: formData.rgpd ? "Oui" : "Non",

        // Date et heure de la soumission
        date: new Date().toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        time: new Date().toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
        }),
    };

    try {
        const response = await emailjs.send(
            serviceId,
            templateId,
            templateParams
        );
        console.log("Email envoyé avec succès:", response);
        return {
            success: true,
            message: "Message envoyé avec succès !",
            response,
        };
    } catch (error) {
        console.error("Erreur EmailJS:", error);
        throw new Error(
            error.text ||
                "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
        );
    }
};
