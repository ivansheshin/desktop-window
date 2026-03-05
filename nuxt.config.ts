// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  routeRules: {
    '/': { appLayout: 'default' },
    '/login/**': { appLayout: 'login' },
  },

  css: ['@/assets/css/base.css'],
  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils'
  ]
})