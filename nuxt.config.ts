import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', 'nuxt-schema-org',],

  schemaOrg: {
    // set to your production domain  
    canonicalHost: 'https://links.timbenniks.dev',
  },
})
