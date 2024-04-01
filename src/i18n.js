import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Your translations
const resources = {
  en: {
    translation: {
      Best_it_solution: 'Best it solution',
    },
  },
  fr: {
    translation: {
      Best_it_solution: 'افضل الحلول البرمجية',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
