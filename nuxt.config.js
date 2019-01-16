const pkg = require('./package')
const Api = 'https://api.quwi.com/v2/'

module.exports = {
  mode: 'universal',
  head: {
    title: "Alex's test project for Udimi",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '@/static/favicon.ico' }
    ]
  },
  loading: { color: '#999' },
  css: ['~/assets/scss/main.scss'],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  router: {
    middleware: ['auth']
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/projects'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: Api + 'auth/login', method: 'post', propertyName: 'token' },
          logout: { url: Api + 'auth/logout', method: 'post' },
          user: false
        }
      }
    }

  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  axios: {
    baseURL: process.env.API_URL || 'https://api.quwi.com/v2/',
    timeout: 10000
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
