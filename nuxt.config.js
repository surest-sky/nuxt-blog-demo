
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'nuxt学习demo: surest.cn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt学习demo: surest.cn' },
      { name: 'keyword', content: "关键字，先瞎几把写吧"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fff',
    height: '5px'
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },

    vendor: ['element-ui']
  },
  axios: {
    prefix: '/api/',
    proxy: true
  },
  proxy: {
    '/api/': {
      target: process.env.BASE_URL,
      pathRewrite: {
        '^/api/': ''
      }
    }
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    NODE_ENV: process.env.NODE_ENV
  }
}
