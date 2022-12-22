import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';

Vue.use(VueI18n);
console.log(process)
async function loadLang(locale) {
  let res = await axios.get(process.env.VUE_APP_API_PATH + `/data/cms/${locale}.json`)
  return res.data
}

let i18n;
const loadedLanguages = []
export function initI18n() {
  let lang = localStorage.getItem('lang');
  if(!lang) {
    lang = ['en', 'pt', 'fr', 'es'].some(l => l === navigator.language.split('-')[0]) ? navigator.language.split('-')[0] : 'en'
  }
  let promise;
  if(lang !== "en") {
    promise = Promise.all([loadLang('en'), loadLang(lang)])
  } else {
    promise = Promise.all([loadLang(lang)])
  }
  return promise.then(function([enData, data]) {
    let messages = {};
    messages["en"] = enData;
    if(lang !== "en") {
      messages[lang] = data;
    }
    i18n = new VueI18n({
      locale: lang,
      fallbackLocale: 'en',
      messages
    })

    loadedLanguages.push(lang)
    localStorage.setItem('lang', lang);
    return i18n;
  })
}
 // our default language that is preloaded

function setI18nLanguage (lang) {
  i18n.locale = lang
  localStorage.setItem('lang', lang);
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export async function loadLanguageAsync(lang = 'en') {

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  let messages = await loadLang(lang)
  i18n.setLocaleMessage(lang, messages)
  loadedLanguages.push(lang)
  return setI18nLanguage(lang)
}

export default initI18n;
