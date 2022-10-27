module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  publicPath: getPublicPath(),

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
        return '/sids/'
    case 'staging':
      return '/home-page/'
    default:
      return '/'
  }
}
