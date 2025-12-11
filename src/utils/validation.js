/**
 * Valide une adresse email
 * @param {string} email - L'adresse email à valider
 * @returns {boolean} - True si valide
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valide un nom (prénom ou nom de famille)
 * @param {string} name - Le nom à valider
 * @returns {boolean} - True si valide (au moins 2 caractères)
 */
export const validateName = (name) => {
  return name && name.trim().length >= 2;
};

/**
 * Valide un message
 * @param {string} message - Le message à valider
 * @returns {boolean} - True si valide (au moins 10 caractères)
 */
export const validateMessage = (message) => {
  return message && message.trim().length >= 10;
};

/**
 * Valide l'objet du message
 * @param {string} subject - L'objet à valider
 * @returns {boolean} - True si valide (non vide)
 */
export const validateSubject = (subject) => {
  return subject && subject.trim() !== '';
};

/**
 * Valide toutes les données du formulaire
 * @param {Object} formData - Les données du formulaire
 * @param {boolean} isPhoneValid - Si le téléphone est valide (pour intl-tel-input)
 * @returns {Object} - { isValid: boolean, errors: Object }
 */
export const validateFormData = (formData, isPhoneValid = true) => {
  const errors = {};

  if (!validateName(formData.lastname)) {
    errors.lastname = 'Le nom doit contenir au moins 2 caractères';
  }

  if (!validateName(formData.firstname)) {
    errors.firstname = 'Le prénom doit contenir au moins 2 caractères';
  }

  if (!validateEmail(formData.email)) {
    errors.email = 'Veuillez entrer une adresse email valide';
  }

  // Validation du téléphone uniquement s'il est renseigné
  if (formData.phone && formData.phone.trim() !== '' && !isPhoneValid) {
    errors.phone = 'Veuillez entrer un numéro de téléphone valide';
  }

  if (!validateSubject(formData.subject)) {
    errors.subject = 'Veuillez sélectionner un objet';
  }

  if (!validateMessage(formData.message)) {
    errors.message = 'Le message doit contenir au moins 10 caractères';
  }

  if (!formData.terms) {
    errors.terms = 'Vous devez accepter les conditions d\'utilisation';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

