export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Muna - Stable coin wallet ',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Friendly crypto wallet for stable coins. Borderless digital payments across Africa. With crypto, without volatility!'
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Secure stable coins wallet'
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: 'website"'
      },
      {
        property: 'og:url',
        content: 'https://muna.africa'
      },
      {
        property: 'og:title',
        content: 'Muna — Secure stable coins wallet'
      },
      {
        property: 'og:description',
        content:
          'Friendly crypto wallet for stable coins. Borderless digital payments across Africa. With crypto, without volatility!'
      },
      {
        property: 'og:image',
        content:
          'https://drive.google.com/file/d/174n8E5dzaBma9uw64F4YDUDBLEjPneML/view'
      },
      // Twitter
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        property: 'twitter:url',
        content: 'https://metatags.io/'
      },
      {
        property: 'twitter:title',
        content: 'Muna — Secure stable coins wallet'
      },
      {
        property: 'twitter:description',
        content:
          'Friendly crypto wallet for stable coins. Borderless digital payments across Africa. With crypto, without volatility!'
      },
      {
        property: 'twitter:image',
        content:
          'https://drive.google.com/file/d/174n8E5dzaBma9uw64F4YDUDBLEjPneML/view'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.svg'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Ubuntu&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/reset.scss', '@/assets/styles/colors.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'bootstrap-vue/nuxt',
    '@neneos/nuxt-animate.css',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
