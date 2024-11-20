// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
  typescript: { shim: false },
  modules: ["@davestewart/nuxt-scrollbar", "@nuxt/icon", "@nuxtjs/device"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Nuxt Dashboard",
      link: [
        {
          rel: "stylesheet",
          href: "https://rsms.me/inter/inter.css",
        },
        {
          rel: "preconnect",
          href: "https://rsms.me/",
        },
      ],
    },
  },
});
