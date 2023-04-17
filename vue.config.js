module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  publicPath: getPublicPath(),
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'UNDP SIDS Data Platform',
      description: 'A digital tool for analyzing the UNDP SIDS Offer Portfolio across the SDGs, SAMOA Pathway priorities, and six UNDP Signature Solutions.'
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
}


function getPublicPath() {
  console.log(process.env.NODE_ENV)
  switch (process.env.NODE_ENV) {
    case 'production':
        return '/'
    case 'staging':
      return '/home-page/'
    default:
      return '/'
  }
}
