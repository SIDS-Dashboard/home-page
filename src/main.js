import Vue from 'vue'
import App from './App.vue'
import initI18n from './language';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

initI18n().then(i18n => {
  new Vue({
    i18n,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})
