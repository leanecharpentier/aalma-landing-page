import { useEffect, useRef, useState } from 'react';

/**
 * Hook personnalisé pour gérer intl-tel-input dans React
 * @param {Object} options - Options pour intl-tel-input
 * @returns {Object} - { phoneInputRef, phoneInstance, isValid, phoneNumber }
 */
export const usePhoneInput = (options = {}) => {
  const phoneInputRef = useRef(null);
  const [phoneInstance, setPhoneInstance] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (!phoneInputRef.current) return;

    // Charger intl-tel-input dynamiquement
    const initPhoneInput = async () => {
      try {
        // Vérifier si intlTelInput est déjà disponible globalement
        if (window.intlTelInput) {
          const iti = window.intlTelInput(phoneInputRef.current, {
            initialCountry: 'fr',
            preferredCountries: ['fr', 'be', 'ch', 'ca', 'us', 'gb'],
            utilsScript:
              'https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.3/build/js/utils.js',
            separateDialCode: true,
            nationalMode: false,
            ...options,
          });

          setPhoneInstance(iti);

          // Écouter les changements
          phoneInputRef.current.addEventListener('blur', () => {
            if (iti.isValidNumber()) {
              setIsValid(true);
              setPhoneNumber(iti.getNumber());
            } else {
              setIsValid(false);
            }
          });

          phoneInputRef.current.addEventListener('input', () => {
            setIsValid(true);
          });
        } else {
          // Charger le script si nécessaire
          const script = document.createElement('script');
          script.src =
            'https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.3/build/js/intlTelInput.min.js';
          script.onload = () => {
            const iti = window.intlTelInput(phoneInputRef.current, {
              initialCountry: 'fr',
              preferredCountries: ['fr', 'be', 'ch', 'ca', 'us', 'gb'],
              utilsScript:
                'https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.3/build/js/utils.js',
              separateDialCode: true,
              nationalMode: false,
              ...options,
            });
            setPhoneInstance(iti);
          };
          document.body.appendChild(script);
        }
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de intl-tel-input:', error);
      }
    };

    initPhoneInput();

    // Cleanup
    return () => {
      if (phoneInstance && phoneInstance.destroy) {
        phoneInstance.destroy();
      }
    };
  }, []);

  const getPhoneNumber = () => {
    if (phoneInstance && phoneInputRef.current?.value.trim() !== '') {
      if (phoneInstance.isValidNumber()) {
        return phoneInstance.getNumber();
      }
    }
    return phoneInputRef.current?.value || '';
  };

  return {
    phoneInputRef,
    phoneInstance,
    isValid,
    phoneNumber: getPhoneNumber(),
    getPhoneNumber,
  };
};

