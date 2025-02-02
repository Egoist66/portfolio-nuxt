// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-31',

  future: {
    compatibilityVersion: 4
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        { rel: "stylesheet", href: "" }
      ],
      script: [
        {src: 'https://code.jquery.com/jquery-3.7.1.min.js', defer: true}
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },

  css: [],

  vue: {
    propsDestructure: true
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"]
})
