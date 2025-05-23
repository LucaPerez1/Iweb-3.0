import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

if (!i18n.isInitialized) {
    i18n
        .use(HttpBackend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: 'es',
            supportedLngs: ['es', 'en'],
            ns: ['home', 'contacto', 'nosotros', 'proyectos', 'servicios', 'componentes'],
            defaultNS: 'home',

            interpolation: {
                escapeValue: false,
            },

            backend: {
                loadPath: '/locales/{{lng}}/{{ns}}.json',
            },

            debug: process.env.NODE_ENV === 'development',
        });
}

export default i18n;
