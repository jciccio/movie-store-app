import i18next from 'i18next';

import { initReactI18next } from 'react-i18next';

import en from '../translations/en.json';
import es from '../translations/es.json';

export async function getLanguage() {
  let language = 'es';
  if (language === null) {
    language = 'es';
  }
  i18next.changeLanguage(language);
  return language;
}

export async function setLanguage(newLanguage) {
  i18next.changeLanguage(newLanguage);
}

i18next
  // Plug in i18next React extensions.
  .use(initReactI18next)
  .init({
    // Add translations. We're adding English (USA) and 
    // translations should be in separate files
    resources: {
      "en": { translation: en },
      "es": { translation: es },
    },
    // Set the default language to English.
    lng: "es",
    // Disable i18next's default escaping, which prevents XSS
    // attacks. React already takes care of this.
    interpolation: {
      escapeValue: false,
    },
  });



export default i18next;
