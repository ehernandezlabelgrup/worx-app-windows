import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './locales/es.json'
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
const resources = {
  es: es
}
console.log(es, 'asdlksajdlksadkl')
i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'es', // if you're using a language detector, do not define the lng option
    fallbackLng: 'es',

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  })

export default i18n
