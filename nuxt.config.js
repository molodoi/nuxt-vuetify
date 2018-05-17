module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Travelify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  plugins: [    
    { src: '~plugins/vuetify', ssr: false }
  ],

  css: ['~assets/css/app.styl'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast'
  ],

  toast: {
    position: 'top-right',
    duration: 2000
  },
  axios: {
    baseURL: 'http://api.goandlive.localhost',
    crossDomain: true,
    headers: {"Access-Control-Allow-Origin": "*", 'X-Requested-With': 'XMLHttpRequest'}
  },
  proxy: {
    '/api': 'http://localhost:3000'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** https://medium.com/@rama41222/basic-authentication-using-auth-nuxt-js-e140859ab4c3
  */
  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback:'/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {url: '/auth', method: 'get', propertyName: 'token' },
          logout: false,
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      },
    },
  },
  
  
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios','vuetify'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        /*
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        */
      }
    }
  }
}
