// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-01-31',
  css: ['~/assets/css/main.css', '~/assets/css/tailwind.css'],
  future: {
    compatibilityVersion: 4
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
 
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    viewTransition: true,
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

  vue: {
    propsDestructure: true
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"]
})

